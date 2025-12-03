import axios from "axios";
import { useState , useEffect } from "react";
import type { Champion } from "../types/ChampionType";

export function Champion() {

    const [championList , setChampionList] = useState<Champion[]>([]);
    const [champion , setChampion] = useState<Champion>();
    
    useEffect(()=>{
        const getAllChampions = async () =>{
            const ALL_CHAMPIONS_URL = "https://ddragon.leagueoflegends.com/cdn/15.23.1/data/fr_FR/champion.json"
            try {
                const allChampionsData = await axios.get(ALL_CHAMPIONS_URL);

                //Récupère la liste des champions 
                let championList:Champion [] = Object.values(allChampionsData.data.data);

                
                setChampionList(championList);
            } catch (error) {
                console.log("Erreur lors du chargement des champions", error);
            }
        }
        
        getAllChampions();
    }, []);
    
    const championId = championList.find(champion => champion.id == "Aatrox")
    console.log(championId)
    useEffect( ()=>{

        if(!championId){
            const getChampion = async() => {
            
            const CHAMPION_URL = `https://ddragon.leagueoflegends.com/cdn/15.23.1/data/fr_FR/champion/${championId}.json`;
            
            try {
                const championData = await axios.get(CHAMPION_URL);
                const championAlone = Object.values(championData.data.data);
                setChampion(championAlone);
                
            } catch (error) {
                console.log("Erreur lors du chargement du champion", error);
            }    
        }
        getChampion();
        };
        
    },[championId]);
    return(
        <div className="flex-column">
            <p className="text fontUp my-5">Nom du Champion : <span className="championName  d-flex justify-content-center"> {champion?.name}Nom</span> </p>
            <p className="text fontUp ">Titre du Champion : <span className="d-flex justify-content-center">{champion?.title} Titre</span> </p>
            <p className="text fontUp ">Histoire du Champion : <span className="d-flex justify-content-center">{champion?.lore}</span> </p>
            <div className="text fontUp">
                <p >Passif du Champion: <span className="d-flex justify-content-center">{champion?.passive.name}</span> </p>
                <p className="d-flex justify-content-center">{champion?.passive.description}</p>
            </div>
        </div>
    
    )
}