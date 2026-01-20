import { Router } from 'express';
import { httpGetPlanets } from "./planets.controller.js";

const planetsRoute = Router();


planetsRoute.get('/', httpGetPlanets);


export default planetsRoute;