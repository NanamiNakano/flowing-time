export default defineEventHandler(async (event) => {
    const rawCookie = getCookie(event, "GitHubOauthResponse")
    if (rawCookie === undefined) {
        return "Error"
    }
    const cookie = JSON.parse(<string>rawCookie) as OauthResponse
    const response = await $fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        params: {
            client_id: runtimeConfig.public.github.clientId,
            client_secret: runtimeConfig.github.clientSecret,
            grant_type: "refresh_token",
            refresh_token: cookie.refresh_token
        },
        headers: {
            Accept: "application/json"
        }
    }).catch(() => {
        deleteCookie(event, "GitHubOauthResponse")
        return "Error"
    }) as OauthResponse

    const date = new Date()
    date.setTime(date.getTime() + response.refresh_token_expires_in)

    return setCookie(event, "GitHubOauthResponse", JSON.stringify(response), {
        expires: date,
        secure: true,
        httpOnly: true,
        sameSite: "strict"
    })
})
