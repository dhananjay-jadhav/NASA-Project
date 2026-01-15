import { Router } from 'express';
import { getPlanets } from "./planets.controller.js";

const planetsRoute = Router();


planetsRoute.get('/', getPlanets);


export default planetsRoute;