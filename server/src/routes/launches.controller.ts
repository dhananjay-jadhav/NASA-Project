import { Request, Response } from 'express';
import launches  from '../models/launches.model.js';


export function getLaunches (req: Request, res: Response){
    return res.status(200).json(launches);
}