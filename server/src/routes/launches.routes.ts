import {Router} from 'express';
import { getLaunches } from './launches.controller.js';


const launchesRouter = Router();


launchesRouter.get('/', getLaunches);


export default launchesRouter;