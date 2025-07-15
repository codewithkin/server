import { Context } from "hono";

export default async function getConfessions(c: Context) {
    try {
        // Get the confessions
        const confessions = [{}];

        return c.json(confessions);
    } catch (e) {
        console.log("An error occured while fetching confessions: ", e);

        c.json({
            error: "An error occured"
        }, 400)
    }
}