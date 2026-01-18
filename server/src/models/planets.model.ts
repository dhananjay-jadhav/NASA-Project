import { getPlanetsData as keplerPlanets, KeplerPlanet } from 'kepler-planets';

const planetes :KeplerPlanet[] = [];

export const loadPlanetsData = async () => {
   planetes.push(...await keplerPlanets());
   console.log(`Loaded planetes all ${ planetes.length} planetes....`);
}


export const getPlanetsData = () => {
   return planetes;
}

export const validPlanet = (planet:string) => {
   const result = planetes.findIndex(data => data.kepler_name === planet);
   if(result === -1){
      return false;
   }
   if(result >= 0){
      return true;
   }
   return false;
}