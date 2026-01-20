import { Request, Response } from "express";
import {
  abortLaunch,
  getLaunchesData,
  isLaunchExist,
  setNewLauncheData,
} from "../../models/launches.model.js";
import { getPlanetsData, validPlanet } from "../../models/planets.model.js";

export function httpGetLaunches(req: Request, res: Response) {
  return res.status(200).json(getLaunchesData());
}

export function httpDeleteLaunches(req: Request, res: Response) {
  const id = +req.params.id;

  if (!isLaunchExist(id)) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }

  const aborted = abortLaunch(id);

  return res.status(200).json(aborted);
}

export function httpPostLaunches(req: Request, res: Response) {
  const input = req.body;

  if (
    !input?.mission ||
    !input?.rocket ||
    !input?.launchDate ||
    !input?.target
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }

  if (!validPlanet(input?.target)) {
    return res.status(400).json({
      error: "Invalid target",
    });
  }

  input.launchDate = new Date(input.launchDate);
  if (isNaN(input.launchDate)) {
    return res.status(400).json({
      error: "Invalid launchDate",
    });
  }

  return res.status(200).json(setNewLauncheData(input));
}
