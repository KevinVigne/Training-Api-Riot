import { useEffect, useState } from "react";
import axios from "axios";
import type { Champion } from "../types/ChampionType";

export function useChampion(id:string){

    const [championAlone , setChampion] = useState<Champion | null>(null);

    useEffect( ()=>{
        //Si il n'y a pas d'id
        if (!id){
            return;
        } 
        const getChampion = async() => {
            const CHAMPION_URL = `https://ddragon.leagueoflegends.com/cdn/15.23.1/data/fr_FR/champion/${id}.json`;
            try { 
                //Requête Get API Riot pour récupérer le champion 
                const championData = await axios.get(CHAMPION_URL);
                const championObj = Object.values(championData.data.data)[0];
                setChampion(championObj);
            } catch (error) {
                console.log("Erreur lors du chargement du champion", error);
            }    
        };
        getChampion();
    },[id]);   
    
    return { championAlone }; 
}