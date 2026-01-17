import { Request, Response } from 'express';
import { getLaunchesData }  from '../models/launches.model.js';


export function httpGetLaunches (req: Request, res: Response){
    return res.status(200).json(getLaunchesData);
}