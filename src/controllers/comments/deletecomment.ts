import { Context } from "hono";
import prisma from "../../helpers/prisma";

export default async function deleteComment(c: Context) {
    try {
        // Get the user's id
        const data = await c.req.json() as any

        const { id } = data;

        console.log("Data ", data);

        const comment = await prisma.confessionComment.delete({
            where: {
                id
            }
        })

        return c.json(comment);
    } catch (e) {
        console.log("An error occured while deleting comment: ", e);

        return c.text("An error occured while deleting comment", 400);
    }
}