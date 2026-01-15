import { getPlanetsData, KeplerPlanet } from 'kepler-planets';

export const planetes :KeplerPlanet[] = [];

export const loadPlanetsData = async () => {
   planetes.push(...await getPlanetsData());
   console.log(`Loaded planetes all ${ planetes.length} planetes....`);
}
