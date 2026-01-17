import {Router} from 'express';
import { httpGetLaunches } from './launches.controller.js';


const launchesRouter = Router();


launchesRouter.get('/', httpGetLaunches);


export default launchesRouter;