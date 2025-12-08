import type { Champion } from "../types/ChampionType";

export function ChampionInfo( {champion}:Champion) {
    return (
        <div className="flex-column info" key={champion.id}>
            <p className="text fontUp my-5 card-title">
                Nom : <span className="championName d-flex justify-content-center">{champion.name}</span>
            </p>

            <p className="text fontUp card-text">
                Titre : <span className="d-flex justify-content-center">{champion.title}</span>
            </p>

            <p className="text fontUp card-text">
                Histoire : <span className="d-flex justify-content-center text-center">{champion.lore}</span>
            </p>

            <div className="text fontUp card-footer">
                <p>
                    Compétence passive :
                    <span className="d-flex justify-content-center">
                        {champion.passive.name}
                    </span>
                </p>
                <p className="d-flex justify-content-center">
                    {champion.passive.description}
                </p>
            </div>
        </div>
    );
}
