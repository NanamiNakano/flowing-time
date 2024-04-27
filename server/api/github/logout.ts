export default defineEventHandler((event) => {
	return deleteCookie(event, "GitHubOauthResponse")
})
