import { useEffect, useState } from "react";
import axios from "axios";
import type { Champion } from "../types/ChampionType";

export function useAllChampions() {
//useState est un Hook qui permet d'ajouter une variable de status à un composant
    const [championList , setChampionList] = useState<Champion[]>([])
    //useEffect relie un composant à un système externe (ici l'API de Riot)
    useEffect(()=>{
        const getAllChampions = async () =>{
            const URL = "https://ddragon.leagueoflegends.com/cdn/15.23.1/data/fr_FR/champion.json"
            try {
                const response = await axios.get(URL);
                //Récupère les data 
                const championList:Champion [] = Object.values(response.data.data)[0];

                //Initialise  le tableau avec les valeur des data
                setChampionList(championList);
            } catch (error) {
                console.log("Erreur lors du chargement des champions", error)
            }
        };
        //Lancement de la fonction qui récupère les data de l'api et les initialise 
        getAllChampions();
    }, []);

return  { championList };
}