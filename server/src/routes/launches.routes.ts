import {Router} from 'express';
import { httpDeleteLaunches, httpGetLaunches, httpPostLaunches } from './launches.controller.js';


const launchesRouter = Router();


launchesRouter.get('/', httpGetLaunches);

launchesRouter.post('/', httpPostLaunches);

launchesRouter.delete('/:id', httpDeleteLaunches);


export default launchesRouter;