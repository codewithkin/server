import { Context } from "hono";
import prisma from "../../helpers/prisma";

export default async function likeConfession(c: Context) {
    try {
        // Get the confession id and creatorName
        const { confessionId, creatorName } = await c.req.json();

        // Create the like
        const like = await prisma.confessionLike.create({
            data: {
                confessionId,
                creatorName
            }
        })

        return c.json(like);
    } catch (e) {
        console.log("An error occured while liking confession: ", e);

        return c.json({
            message: "An error occured while liking confession"
        }, 400)
    }
}