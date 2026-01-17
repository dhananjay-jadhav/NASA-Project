


interface Launch {
    flightNumber: number;
    mission: string;
    rocket: string;
    launchDate: Date;
    target: string;
    customers: string[];
    upcoming: boolean;
    success: boolean
};

const launches = new Map<number, Launch>();

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers: ['JAY', 'NASA'],
    upcoming: true,
    success: true
};

launches.set(launch.flightNumber, launch);

export const  getLaunchesData = () => {
   return Array.from(launches.values());
}
