import {z} from "zod";

const LinkSchema = z.object({
    title: z.string().min(1),
    link: z.string().url("Invalid URL").min(1),
    iconUrl: z.string().url("Invalid URL").min(1),
    description: z.string().min(1),
});

export default defineEventHandler(async (event) => {
    if (event.method !== "POST") {
        return "Error"
    }
    const data = getQuery(event) as Link
    try {
        LinkSchema.parse(data)
    } catch (e) {
        return "Error"
    }
})
