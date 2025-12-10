import { ChampionPreview } from "../components/ChampionPreview"

export function ChampionList(){
    return (
        <div className="container-fluid row">
            <h1 className="d-flex justify-content-center title col-12 py-3">Liste des Champions</h1>
            
            <ChampionPreview/>
        </div>
    )
}