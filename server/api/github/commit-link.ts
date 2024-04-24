import {Octokit} from "octokit";

export default defineEventHandler(async (event) => {
    if (event.method !== "POST") {
        return "Error"
    }

    const params = getQuery(event)
    if (params.user === null || params.data === null) {
        return "Error"
    }
    const data = JSON.parse(<string>params.data) as Link
    const people = JSON.parse(<string>params.user) as People

    const rawCookie = getCookie(event, "GitHubOauthResponse")
    if (rawCookie === undefined) {
        return "Error"
    }
    const cookie = JSON.parse(<string>rawCookie) as OauthResponse

    const octokit = new Octokit({auth: cookie.access_token})

    try {
        let basedNewContent = ""
        let sha = ""
        await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: people.username,
            repo: "flowing-time",
            path: "assets/data/links.json"
        }).then(result => {
            if ("content" in result.data) {
                const linkArray = JSON.parse(Buffer.from(result.data.content, 'base64').toString()) as Link[]
                linkArray.push(data)
                basedNewContent = Buffer.from(JSON.stringify(linkArray, null, 2), 'utf-8').toString('base64')
                sha = result.data.sha
            } else {
                throw Error
            }
        })

        await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
            owner: people.username,
            repo: "flowing-time",
            path: "assets/data/links.json",
            message: `Add ${people.display_name}`,
            committer: {
                name: people.display_name,
                email: people.email === null ? "anonymous@example.com" : people.email
            },
            content: basedNewContent,
            sha: sha,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
    } catch (error) {
        console.log(error)
        return "Error"
    }
})
