import {z} from "zod";

const LinkSchema = z.object({
    title: z.string().min(1),
    link: z.string().url("Invalid URL").min(1),
    iconUrl: z.string().url("Invalid URL").min(1),
    description: z.string().min(1),
});

type Link = z.infer<typeof LinkSchema>;
