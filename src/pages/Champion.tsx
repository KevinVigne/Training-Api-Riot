import axios from "axios";
import { useState , useEffect, type JSX} from "react";
import type { Champion } from "../types/ChampionType";
import { useParams } from "react-router-dom";

export function Champion() {

    const [championList , setChampionList] = useState<Champion[]>([]);
    const [championAlone , setChampion] = useState<Champion[]>([]);
    
    useEffect(()=>{
        const getAllChampions = async () =>{
            const ALL_CHAMPIONS_URL = "https://ddragon.leagueoflegends.com/cdn/15.23.1/data/fr_FR/champion.json"
            try {
                const allChampionsData = await axios.get(ALL_CHAMPIONS_URL);

                //Récupère la liste des champions 
                const championList:Champion [] = Object.values(allChampionsData.data.data);

                
                setChampionList(championList);
            } catch (error) {
                console.log("Erreur lors du chargement des champions", error);
            }
        } 
        
        getAllChampions();
    }, []);
    //Récupération par l'id
    const {id} = useParams();
    useEffect( ()=>{
        const getChampion = async() => {
            const CHAMPION_URL = `https://ddragon.leagueoflegends.com/cdn/15.23.1/data/fr_FR/champion/${id}.json`;
                
            try {
                
                //Requête Get API Riot pour récupérer le champion en question
                const championData = await axios.get(CHAMPION_URL);
                const championAlone = Object.values(championData.data.data);

                setChampion(championAlone);
                
                
            } catch (error) {
                console.log("Erreur lors du chargement du champion", error);
            }    
        
        
        };
        getChampion();
        
    },[]);

    // console.log(id)
    //initialise un tableau qui contiendra l'affichage des informations'
    const championInfo:JSX.Element[] =[] ;
    // console.log(championAlone)
    championAlone?.forEach((champion) => {
        championInfo.push(
            <div className="flex-column" key={champion.name}>
                <p className="text fontUp my-5">Nom  : <span className="championName  d-flex justify-content-center"> {champion.name}</span> </p>
                <p className="text fontUp ">Titre : <span className="d-flex justify-content-center">{champion.title} </span> </p>
                <p className="text fontUp ">Histoire : <span className="d-flex justify-content-center">{champion.lore}</span> </p>
                <div className="text fontUp">
                    <p >Compétence passive: <span className="d-flex justify-content-center">{champion.passive?.name}</span> </p>
                    <p className="d-flex justify-content-center">{champion.passive?.description}</p>
                </div>
            </div>
        )})
    
    return(
        <>
            <h1 className="text d-flex justify-content-center my-5">Information du Champion</h1>
            {championInfo}
        </>
    );
}