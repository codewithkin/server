import { Hono } from 'hono'
import getConfessions from './controllers/confessions/getConfessions'

const app = new Hono()

// Routes
app.get("/api/open/confessions", getConfessions);

export default app