const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    if (query.code === null) {
        return "Error"
    }

    const response = await $fetch("https://github.com/login/oauth/access_token", {
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

    const date = new Date()
    date.setTime(date.getTime() + response.refresh_token_expires_in)

    setCookie(event, "GitHubOauthResponse", JSON.stringify(response),{
        expires: date,
        secure: true,
        httpOnly: true,
        sameSite: "strict"
    })

    return sendRedirect(event, `${runtimeConfig.public.site.uri}/friends`)
})
