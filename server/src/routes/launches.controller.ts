import { Request, Response } from 'express';
import launches  from '../models/launches.model.js';



export function getLaunches (req: Request, res: Response){
    const data = Array.from(launches.values());
    return res.status(200).json(data);
}