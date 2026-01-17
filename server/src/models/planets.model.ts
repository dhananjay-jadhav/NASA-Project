import { getPlanetsData as keplerPlanets, KeplerPlanet } from 'kepler-planets';

const planetes :KeplerPlanet[] = [];

export const loadPlanetsData = async () => {
   planetes.push(...await keplerPlanets());
   console.log(`Loaded planetes all ${ planetes.length} planetes....`);
}


export const getPlanetsData = () => {
   return planetes;
}