import {Link, LinkSchema} from "~/types/link";


export default defineEventHandler((event) => {
    if (event.method !== "POST") {
        return "Error"
    }
    const data = getRouterParams(event) as Link
    try {
        LinkSchema.parse(data)
    } catch (e) {
        return "Error"
    }

    const rawCookie = getCookie(event, "GitHubOauthResponse")
    if (rawCookie === undefined) {
        return "Error"
    }
    const cookie = JSON.parse(<string>rawCookie) as OauthResponse


    return "E"
})
