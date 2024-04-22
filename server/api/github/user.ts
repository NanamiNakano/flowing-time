export default defineEventHandler(async (event) => {
    const rawCookie = getCookie(event, "GitHubOauthResponse")
    if (rawCookie === undefined) {
        return "Error"
    }
    const cookie = JSON.parse(<string>rawCookie) as OauthResponse

    return await $fetch("https://api.github.com/user", {
        headers: {
            Authorization: `Bearer ${cookie.access_token}`,
            Accept: "application/json"
        },
        async onResponseError({response}) {
            if (response.status === 401) {
                await $fetch("/api/github/refresh-token")
            } else {
                deleteCookie(event, "GitHubOauthResponse")
            }
        }
    }).catch(() => {
        deleteCookie(event, "GitHubOauthResponse")
        return "Error"
    }) as User
})
