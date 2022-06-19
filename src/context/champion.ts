import { Champions } from '../db/champion-data'

export type Champion = {
   apiname: string;
   be: number;
   rp: number;
}

export type ChampionCard = {
   displayName: string;
   name: string;
   costEA: number;
   costRP: number;
   costBRL: string;
   splashImg: string;
}

export type ChampionItem = {
   displayName: string;
   squareImg: string;
}

const IMG_SPLASH_URL = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash'
const IMG_SQUARE_URL = 'http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion'
const RP_UNIT_PRICE = 0.024615385;

function getSplashImg(championName: string): string {
   return `${IMG_SPLASH_URL}/${championName}_0.jpg`
}

function getSquareImg(championName: string): string {
   return `${IMG_SQUARE_URL}/${championName}.png`
}

function getPrice(costRP: number): string {
   return (costRP * RP_UNIT_PRICE).toFixed(2).replace('.', ',');
}

function getInfo(championName: string): ChampionCard | string {
   const champion: Champion = (<any>Champions)[championName];

   if(!champion) return "Champion not found";

   return { 
      displayName: championName,
      name: champion.apiname,
      costEA: champion.be,
      costRP: champion.rp,
      costBRL: getPrice(champion.rp),
      splashImg: getSplashImg(champion.apiname),
   };
}

function getBasicInfo(championName: string): ChampionItem | string {
   const champion: Champion = (<any>Champions)[championName];

   if(!champion) return "Champion not found";

   return { 
      displayName: championName,
      squareImg: getSquareImg(champion.apiname)
   };
}

function getBasicInfos(champions: Array<string>): Array<ChampionItem | string> {
   return champions.map(x => getBasicInfo(x))
}

function getChampionsName(): Array<string> {
   return Object.keys(Champions);
}

function getInfos(champions: Array<string>): Array<ChampionCard | string> {
   return champions.map(x => getInfo(x));
}

export function list() {
   return getInfos(getChampionsName());
}
