import { Context } from "hono";
import prisma from "../../helpers/prisma";

export default async function unlikeConfession(c: Context) {
    try {
        // Get the confession id and creatorName
        const { confessionId, creatorName } = c.req.param as any;

        // Get the like
        const like = await prisma.confessionLike.findFirst({
            where: {
                confessionId,
                creatorName
            }
        });

        // Create the unlike
        const unlike = await prisma.confessionLike.delete({
            where: {
                id: like?.id
            }
        });

        return c.json(unlike);
    } catch (e) {
        console.log("An error occured while liking confession: ", e);

        return c.json({
            message: "An error occured while liking confession"
        }, 400)
    }
}