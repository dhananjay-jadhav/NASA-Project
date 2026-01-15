import express from 'express';
import cors from 'cors';

import planetsRoute from './routes/planets.routes.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());

app.use('/planets', planetsRoute);

export default app;
