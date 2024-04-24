import {App, RequestError} from "octokit";

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    if (query.code === null) {
        return "Error"
    }

    let oauthResponse
    try {
        oauthResponse = await $fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            params: {
                client_id: runtimeConfig.public.github.clientId,
                client_secret: runtimeConfig.github.clientSecret,
                code: query.code,
            },
            headers: {
                Accept: "application/json"
            }
        }) as OauthResponse
    } catch (error) {
        return "Error"
    }

    const date = new Date()
    date.setTime(date.getTime() + oauthResponse.refresh_token_expires_in)

    setCookie(event, "GitHubOauthResponse", JSON.stringify(oauthResponse), {
        expires: date,
        secure: true,
        httpOnly: true,
        sameSite: "strict"
    })

    let user
    try {
        user = await $fetch("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${oauthResponse.access_token}`,
                Accept: "application/json"
            }
        }) as User
    } catch (error) {
        deleteCookie(event, "GitHubOauthResponse")
        return "Error"
    }

    const app = new App({
        appId: runtimeConfig.public.github.appId,
        privateKey: runtimeConfig.github.privateKey,
    })

    try {
        const installationResponse =
            await app.octokit.request(`/users/${user.login}/installation`) as unknown as InstallationResponse

        setCookie(event, "GitHubInstallationId", `${installationResponse.id}`, {
            httpOnly: true,
            sameSite: "strict",
            secure: true,
            expires: date
        })
    } catch (error) {
        if (error instanceof RequestError && error.status === 404) {
            return sendRedirect(event, `https://github.com/apps/${runtimeConfig.public.github.appName}/installations/new`)
        }
        return "Error"
    }

    return sendRedirect(event, `${runtimeConfig.public.site.uri}/friends`)
})
