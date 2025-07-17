import { Context } from "hono";
import prisma from "../../helpers/prisma";

export default async function getConfessions(c: Context) {
    try {
        const { filter, date } = c.req.query()

        if (filter === "All") {
            // Get the confessions
            const confessions = await prisma.confession.findMany({
                include: {
                    likes: true,
                    comments: true
                },
                orderBy: {
                    postedAt: "asc"
                }
            });

            return c.json(confessions);
        } else if (filter === "Trending") {

            // Get the confessions
            const confessions = await prisma.confession.findMany({
                include: {
                    likes: true,
                    comments: true
                }
            });

            return c.json(confessions);
        }

        // Logic for "Today" confessions

        const today = new Date(date);

        const tomorrow = new Date(today.getDate() + 1);

        // Get the confessions
        const confessions = await prisma.confession.findMany({
            where: {
                postedAt: {
                    gte: today,
                    lte: tomorrow
                }
            },
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