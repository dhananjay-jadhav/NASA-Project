import {Request , Response} from 'express';
import { getPlanetsData } from '../models/planets.model.js';


export const httpGetPlanets = (req: Request, res: Response) => {
    return res.status(200).json(getPlanetsData);
}