import {Request , Response} from 'express';
import { planetes } from '../models/planets.model';


export const getPlanets = (req: Request, res: Response) => {
    return res.status(200).json(planetes);
}