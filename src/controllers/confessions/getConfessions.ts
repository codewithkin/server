import { Context } from "hono";
import prisma from "../../helpers/prisma";

export default async function getConfessions(c: Context) {
    try {
        // Get the confessions
        const confessions = await prisma.confession.findMany({
            include: {
                likes: true,
                comments: true
            }
        });

        return c.json(confessions);
    } catch (e) {
        console.log("An error occured while fetching confessions: ", e);

        c.json({
            error: "An error occured"
        }, 400)
    }
}