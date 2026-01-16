import express from 'express';
import cors from 'cors';
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import planetsRoute from './routes/planets.routes.js';
import morgan from 'morgan';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json());

app.use(morgan('combined'));

app.use(express.static(join(__dirname, "..", "public")));

app.use('/planets', planetsRoute);

app.use('/',(req, res) => {
    res.sendFile(join(__dirname, "..", "public", 'index.html'))
});

export default app;
