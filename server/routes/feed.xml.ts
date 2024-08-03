import RSS from "rss"
import { serverQueryContent } from "#content/server"

export default defineEventHandler(async (event) => {
	const feed = new RSS({
		title: "「The Nanami」",
		site_url: "https://thynanami.dev",
		feed_url: "https://thynanami.dev/feed.xml",
	})

	const docs = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find()
	const blogPosts = docs.filter(doc => doc?._path?.includes("/articles"))

	for (const doc of blogPosts) {
		feed.item({
			title: doc.title ?? "-",
			url: `https://thynanami.dev/blog${doc._path}`,
			date: doc.date,
			description: doc.description,
		})
	}

	const feedString = feed.xml({ indent: true })
	appendResponseHeader(event, "content-type", "text/xml")
	return feedString
})
