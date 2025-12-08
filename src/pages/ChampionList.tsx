import axios from "axios"
import { useState, useEffect, type JSX } from "react";
import type { Champion } from "../types/ChampionType";

export function ChampionList(){
    //useState est un Hook qui permet d'ajouter une variable de status à un composant
    const [championList , setChampionList] = useState<Champion[]>([])
    //useEffect relie un composant à un système externe (ici l'API de Riot)
    useEffect(()=>{
        const getAllChampions = async () =>{
            const URL = "https://ddragon.leagueoflegends.com/cdn/15.23.1/data/fr_FR/champion.json"
            try {
                const response = await axios.get(URL);
                //Récupère les data 
                const championList:Champion [] = Object.values(response.data.data);

                //Initialise  le tableau avec les valeur des data
                setChampionList(championList);
            } catch (error) {
                console.log("Erreur lors du chargement des champions", error)
            }
        }
        //Lancement de la fonction qui récupère les data de l'api et les initialise 
        getAllChampions();
    }, []);
        //Initialisation d'un tableau contenant toutes les infos des champions
        const champions:JSX.Element[] =[] ;
        
        championList.forEach((champion)=>{
            champions.push(
                <a href={`/champion/${champion.id}`} className="card py-4 col-12 card-border my-2 mx-5 noStyle" key={champion.id}>
                    <div className="card-body">
                        <p className="card-title ">Nom : <span className="championName d-flex justify-content-center">{champion.name}</span></p>
                        <p className="card-text">Titre : <span className="d-flex justify-content-center align-self-start">{champion.title}</span></p>
                        <p className="card-text">Description : {champion.blurb}</p>
                    </div>
                </a>
            )
        })
    return (
        <div className="container-fluid row">
            <h1 className="d-flex justify-content-center title col-12 py-3">Liste des Champions</h1>
            {champions}
            
        </div>
    )
}