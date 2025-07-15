import { Context } from "hono";
import prisma from "../../helpers/prisma";

export default async function createComment(c: Context) {
    try {
        // Get the user's id
        const data = await c.req.json() as any

        const { creatorId, confessionId, text } = data;

        console.log("Data ", data);

        const comment = await prisma.confessionComment.create({
            data: {
                creatorId,
                confessionId,
                text
            }
        })

        return c.json(comment);
    } catch (e) {
        console.log("An error occured while creating comment: ", e);

        return c.text("An error occured while creating comment", 400);
    }
}