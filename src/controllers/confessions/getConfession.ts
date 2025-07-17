import { Context } from "hono";
import prisma from "../../helpers/prisma";

export default async function getConfession (c: Context) {
    try {
        // Get the confession id
        const id = c.req.query("id");

        // Get the confession
        const confession = await prisma.confession.findUnique({
            where: {
                id
            },
            include: {
                comments: true,
                likes: true,
            }
        });

        return c.json(confession);
    } catch (e) {
        console.log("An error occured while getting confession: ", e);

        return c.json({
            error: "An error occured while getting confession"
        }, 400)
    }
}