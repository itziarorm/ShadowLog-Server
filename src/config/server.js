import express from 'express';
import { createServer } from "node:http"
import authRoutes from "../routes/auth.routes.js"
import ShadowRoutes from '../routes/ShadowRoutes.js'

const app = express();

const httpServer = createServer(app);

app.use(express.json());

app.use("/api/shadows",ShadowRoutes)

app.get("/", (req, res) =>{
    res.json({ message: "Node.js Express server is running."})
});

app.use("/auth", ShadowRoutes);


export { app, httpServer};