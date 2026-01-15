import express from 'express';
import planetsRoute from './routes/planets.routes';

const app = express();

app.use(express.json());

app.use('/planets', planetsRoute);

export default app;
