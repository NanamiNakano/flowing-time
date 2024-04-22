import {App, RequestError} from "octokit";

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    if (query.code === null) {
        return "Error"
    }

    const oauthResponse = await $fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        params: {
            client_id: runtimeConfig.public.github.clientId,
            client_secret: runtimeConfig.github.clientSecret,
            code: query.code,
        },
        headers: {
            Accept: "application/json"
        }
    }).catch(() => {
        return "Error"
    }) as OauthResponse

    const date = new Date()
    date.setTime(date.getTime() + oauthResponse.refresh_token_expires_in)

    setCookie(event, "GitHubOauthResponse", JSON.stringify(oauthResponse), {
        expires: date,
        secure: true,
        httpOnly: true,
        sameSite: "strict"
    })

    const user = await $fetch("https://api.github.com/user", {
        headers: {
            Authorization: `Bearer ${oauthResponse.access_token}`,
            Accept: "application/json"
        }
    }).catch(() => {
        deleteCookie(event, "GitHubOauthResponse")
        return "Error"
    }) as User

    const app = new App({
        appId: runtimeConfig.public.github.appId,
        privateKey: runtimeConfig.github.privateKey,
    })

    try {
        await app.octokit.request(`/users/${user.login}/installation`)
    } catch (error) {
        if (error instanceof RequestError && error.status === 404) {
            return sendRedirect(event, "https://github.com/apps/links-updater/installations/new")
        }
        return "Error"
    }

    return sendRedirect(event, `${runtimeConfig.public.site.uri}/friends`)
})
