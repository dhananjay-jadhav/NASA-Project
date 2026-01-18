import {Router} from 'express';
import { httpGetLaunches, httpPostLaunches } from './launches.controller.js';


const launchesRouter = Router();


launchesRouter.get('/', httpGetLaunches);

launchesRouter.post('/', httpPostLaunches);


export default launchesRouter;