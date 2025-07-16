import { Hono } from 'hono'
import getConfessions from './controllers/confessions/getConfessions'
import createConfession from './controllers/confessions/createConfession';
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import likeConfession from './controllers/confessions/likeConfession';

const app = new Hono()

// middleware
app.use("*", logger())
app.use("*", cors({
    origin: ["http://localhost:3000", "https://openconfess.buzz"]
}))

// Routes
app.post("/api/openconfess/confessions", createConfession);
app.get("/api/openconfess/confessions", getConfessions);
app.post("/api/openconfess/confessions/like", likeConfession);

export default app