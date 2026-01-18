interface Launch {
  flightNumber: number;
  mission: string;
  rocket: string;
  launchDate: Date;
  target: string;
  customers: string[];
  upcoming: boolean;
  success: boolean;
}

export interface createLaunchInput {
  mission: string;
  rocket: string;
  launchDate: Date;
  target: string;
}

const launches = new Map<number, Launch>();

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customers: ["JAY", "NASA"],
  upcoming: true,
  success: true,
};

let latestFlightNumber = 100;

launches.set(launch.flightNumber, launch);

export const getLaunchesData = () => {
  return Array.from(launches.values());
};

export const setNewLauncheData = (input: createLaunchInput) => {
  const entity: Launch = {
    flightNumber: latestFlightNumber,
    success: true,
    upcoming: true,
    customers: ["JAY", "NASA"],
    ...input,
  };
  latestFlightNumber++;
  launches.set(entity.flightNumber, entity);
  return launches.get(entity.flightNumber);
};
