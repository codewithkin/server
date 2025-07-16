import { Context } from "hono";
import prisma from "../../helpers/prisma";

export default async function createConfession(c: Context) {
    try {
        // Get the creator id
        const body = await c.req.json() as any;

        const type = body.type;
        const text = body.text;
        const audioUrl = body.audioUrl;

        console.log("Reuqest body: ", body);

        // Build an obj to pass to prisma
        const data: any = {
            creatorName: body.creatorName,
        }

        // If the confession is of type text
        if (type == "text") {
            data.text = text
        } else if (type == "audio") {
            data.text = text
        }


        // Create a new confession in the db
        const newConfession = await prisma.confession.create({
            data
        });

        // Return the new confession
        return c.json(newConfession);
    } catch (e) {
        console.log("An error occured while creating confession: ", e);

        return c.json({
            error: "An error occured while creating confession"
        }, 400);
    }
}