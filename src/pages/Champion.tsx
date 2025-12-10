import { ChampionInfo } from "../components/ChampionInfo.tsx";
import { useChampion } from "../hooks/useChampion.tsx"
import { useParams } from "react-router-dom";


export function Champion(){
    const { id } = useParams();
    const { championAlone } = useChampion(id);

    //Tant que le champion n'a pas  chargé
    if (!championAlone){
        return <h1 className="text d-flex justify-content-center py-4">Chargement du Champion ...</h1>;
    } 

    return(
        <>
            <h1 className="text d-flex justify-content-center my-5">Informations du Champion</h1>
            <ChampionInfo 
            champion = {championAlone}
            />
        </>
    );
}