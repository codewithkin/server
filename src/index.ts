import { Hono } from 'hono'
import getConfessions from './controllers/confessions/getConfessions'
import createConfession from './controllers/confessions/createConfession';
import { logger } from "hono/logger";

const app = new Hono()

// middleware
app.use("*", logger())

// Routes
app.post("/api/open/confessions", createConfession);
app.get("/api/open/confessions", getConfessions);

export default app