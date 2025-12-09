import type { JSX, Key } from "react";
import { useAllChampions } from "../hooks/useAllChampion";

export function ChampionPreview(){
    //Initialisation d'un tableau contenant toutes les infos des champions
    const champions:JSX.Element[] =[] ;
    const championList = useAllChampions();

    championList.forEach((champion: { id: Key ; name: string ; title: string ; blurb: string ; })=>{
        champions.push(
            <a href={`/champion/${champion.id}`} className="card py-4 col-12 card-border my-2 mx-5 noStyle" key={champion.id}>
                <div className="card-body">
                    <p className="card-title championName d-flex justify-content-center">{champion.name}</p>
                    <p className="card-text d-flex justify-content-center align-self-start">{champion.title}</p>
                    <p className="card-text">{champion.blurb}</p>
                </div>
            </a>
        )
    })
    return {champions};

}