import { ChampionCard, list } from "./context/champion";
import "./public/style.scss"

const championsList: Array<ChampionCard | string> = list()//.slice(0, 9);

let championsEl: any = document.getElementById('champions');

console.log(championsEl);

championsList.map(x => {
   let element = renderChampionCard(x)
   championsEl.innerHTML += element;
})

function renderChampionCard(champion: ChampionCard | string) {
   if(typeof champion === "string") return;

   return `
      <div class="champion" style="background: url('${champion.splashImg}') no-repeat">
         <div class="info">
            <h2>${champion.displayName}</h2>
            <span>R$ ${champion.costBRL}</span>
         </div>
      </div>
   `
}

   import "./utils/card-hover";