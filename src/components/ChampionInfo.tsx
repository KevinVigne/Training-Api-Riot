import type { Champion } from "../types/ChampionType";

export function ChampionInfo( {champion}:Champion) {
    return (
        <div className="flex-column info" key={champion.id}>
            <p className="text fontUp my-5 mx-2 card-title championName d-flex justify-content-center">
                {champion.name}
            </p>

            <p className="text fontUp card-text mx-2 d-flex justify-content-center">
               {champion.title}
            </p>

            <p className="text fontUp card-text mx-2 d-flex justify-content-center text-center">
                {champion.lore}
            </p>

            <div className="text fontUp card-footer ">
                <p className="mx-2 my-1">
                    Compétence passive :
                    <span className="d-flex justify-content-center">
                        {champion.passive.name}
                    </span>
                </p>
                <p className="d-flex justify-content-center mx-2">
                    {champion.passive.description}
                </p>
            </div>
        </div>
    );/*TODO Ajout de l'image du champion et de ses sorts avec leurs images respectives*/ 
}
