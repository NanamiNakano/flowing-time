import {Octokit} from "octokit";

export default defineEventHandler(async (event) => {
    const rawCookie = getCookie(event, "GitHubOauthResponse")
    if (rawCookie === undefined) {
        return "Error"
    }
    const cookie = JSON.parse(<string>rawCookie) as OauthResponse

    const octokit = new Octokit({auth: cookie.access_token})

    try {
        await octokit.request('POST /repos/{owner}/{repo}/forks', {
            owner: "NanamiNakano",
            repo: "flowing-time",
            name: "flowing-time",
            default_branch_only: true,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        return "Success"
    } catch (error) {
        return "Error"
    }
})
