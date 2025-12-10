import type { Champion } from "../types/ChampionType";

export function ChampionInfo( {champion}:{champion:Champion}) {
    return (
        <div className="flex-column info col-8" key={champion.id}>
            <h1 className="text fontUp  mt-4 mx-2 card-title championName d-flex justify-content-center">{champion.name}</h1>
            <p className="text fontUp m-2 card-title championName d-flex justify-content-center">
                <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                alt={champion.name}
                width={308}
                height={560}
            />
            </p>
            

            <p className="text fontUp card-text mx-2 d-flex justify-content-center">
               {champion.title}
            </p>

            <p className="text fontUp card-text mx-2 d-flex justify-content-center text-center">
                {champion.lore}
            </p>

            <div className="text fontUp card-footer ">
                <p className="mx-2 my-1">
                    <span className="d-flex justify-content-center">
                        {champion.passive.name}
                    </span>
                </p>
                <p className="d-flex justify-content-center mx-2">
                    {champion.passive.description}
                </p>
            </div>
             <div className="my-5">
                {champion.spells.map((spell) => (
                    <div key={spell.id} className="text-center my-4">

                        <strong>{spell.name}</strong>

                        <div className="d-flex justify-content-center my-3">
                            <img
                                src={`https://ddragon.leagueoflegends.com/cdn/15.23.1/img/spell/${spell.image.full}`}
                                alt={spell.name}
                                width={64}
                                height={64}
                            />
                        </div>

                        <p className=" text mx-3">{spell.description}</p>

                    </div>
                ))}
            </div>
        </div>
    );/*TODO Ajout de l'image du champion et de ses sorts avec leurs images respectives*/ 
}
