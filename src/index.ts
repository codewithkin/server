import { Hono } from 'hono'
import getConfessions from './controllers/confessions/getConfessions'
import createConfession from './controllers/confessions/createConfession';

const app = new Hono()

// Routes
app.post("/api/open/confessions", createConfession);
app.get("/api/open/confessions", getConfessions);

export default app