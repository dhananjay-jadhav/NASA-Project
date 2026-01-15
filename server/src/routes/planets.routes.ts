import { Router } from 'express';
import { getPlanets } from "./planets.controller";

const planetsRoute = Router();


planetsRoute.get('/', getPlanets);


export default planetsRoute;