import axios from "axios";
import { useState , useEffect } from "react";
import type { Champion } from "../types/ChampionType";

export function Champion() {

    const [championList , setChampionList] = useState<Champion[]>([]);
    const [champion , setChampion] = useState<Champion[]>([]);
    
    useEffect(()=>{
        const getAllChampions = async () =>{
            const ALL_CHAMPION_URL = "https://ddragon.leagueoflegends.com/cdn/15.23.1/data/fr_FR/champion.json"
            try {
                const allChampionData = await axios.get(ALL_CHAMPION_URL);
                //Récupère les data 
                let championList:Champion [] = Object.values(allChampionData.data.data);

                //Initialise  le tableau avec les valeur des data de l'API Riot
                setChampionList(championList);
            } catch (error) {
                console.log("Erreur lors du chargement des champions", error);
            }
        }
        //Lancement de la fonction qui récupère les data de l'api et les initialise 
        getAllChampions();
    }, []);
    const championId = "Aatrox";
    // const championId = championList.find((??) , ?? == ?? )

    useEffect( ()=>{
        const getChampion = async() => {
            // console.log(championId);
            const CHAMPION_URL = `https://ddragon.leagueoflegends.com/cdn/15.23.1/data/fr_FR/champion/${championId}.json`;
            // console.log(CHAMPION_URL);
            try {
                const championData = await axios.get(CHAMPION_URL);
                const champion:Champion[] = Object.values(championData.data);
                setChampion(champion);
                
            } catch (error) {
                console.log("Erreur lors du chargement du champion", error);
            }    
        }
        getChampion();
    },[]);
    return(
        <div className="flex-column">
            <p className="text fontUp my-5">Nom du Champion : </p>
            <p className="text fontUp ">Titre du Champion : </p>
            <p className="text fontUp ">Histoire du Champion : </p>
            <div className="text flex-column fontUp">
                <p >Passif du Champion: </p>
                <p className="d-flex justify-content-center">Passif</p>
            </div>
        </div>
    
    )
}
// <span className="championName  d-flex justify-content-center"> {champion.name}Nom</span>
// <span className="d-flex justify-content-center">{champion.title} Titre</span>
// <span className="d-flex justify-content-center">Histoire</span>
// <span className="d-flex justify-content-center">{champion.passive.name}nom passif</span>
// {champion.passive.description}