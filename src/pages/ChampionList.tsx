import axios from "axios"
import { useState, useEffect } from "react";
import type { Champion } from "../types/ChampionType";

export function ChampionList(){
    //TO DO commentaire sur le useState
    const [championList , setChampionList] = useState<Champion[]>([])
    //TO DO commentaire sur le useEffect
    useEffect(()=>{
        const getAllChampions = async () =>{
            const URL = "https://ddragon.leagueoflegends.com/cdn/15.23.1/data/fr_FR/champion.json"
            try {
                const response = await axios.get(URL);
                //Récupère les data 
                let championList:Champion [] = Object.values(response.data.data);

                //Initialise  le tableau avec les valeur des data
                setChampionList(championList);
            } catch (error) {
                console.log("Erreur lors du chargement des champions", error)
            }
        }
        //Lancement de la fonction qui récupère les data de l'api et les initialise 
        getAllChampions();
    }, []);
        //TO DO Typage de ce tableau d'éléments HTML
        let champions:Array[] =[] ;
        
        championList.forEach((champion)=>{
            champions.push(
                <div className="card" key={champion.id}>
                    <div className="card-body">
                        <p className="card-title">Nom du Champion : {champion.name}</p>
                        <p className="card-text">Titre du Champion : {champion.title}</p>
                        <p className="card-text">Description du Champion : {champion.blurb}</p>
                    </div>
                </div>
            )
        })
    return (
        <div >
            <h1>Liste des Champions</h1>
            {champions}
            
        </div>
    )
}