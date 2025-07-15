import { Context } from "hono";
import prisma from "../../helpers/prisma";

export default async function editComment(c: Context) {
    try {
        // Get the user's id
        const data = await c.req.json() as any

        const { confessionCommentId, text } = data;

        console.log("Data ", data);

        const comment = await prisma.confessionComment.update({
            where: {
                id: confessionCommentId
            },
            data: {
                text
            }
        })

        return c.json(comment);
    } catch (e) {
        console.log("An error occured while editing comment: ", e);

        return c.text("An error occured while editing comment", 400);
    }
}