export default defineEventHandler(async (event) => {
    const rawCookie = getCookie(event, "GitHubOauthResponse")
    if (rawCookie === undefined) {
        return "Error"
    }
    const cookie = JSON.parse(<string>rawCookie) as OauthResponse

    try {
        const user = await $fetch("https://api.github.com/user", {
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
        }) as User
        return  {
            username: user.login,
            display_name: user.name,
            email: user.email
        } as People
    } catch (error) {
        console.log(error)
        return "Error"
    }
})
