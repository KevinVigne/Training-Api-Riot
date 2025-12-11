import type { Champion } from "../types/ChampionType";

export function ChampionInfo({ champion }: { champion: Champion }) {
    return (
        <div className="container my-5">
            <div className=" card card-border mb-4 pt-5">
                <h1 className="text championName fontUp text-center mb-4">
                    {champion.name}
                </h1>
                <div className="d-flex justify-content-center mb-4">
                    <img
                        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                        alt={champion.name}
                        width={300}
                        height={550}
                        className="img-fluid rounded"
                    />
                </div>
                <h3 className="text text-center fontUp mb-3">{champion.title}</h3>
                <p className="text fontUp text-center mx-auto mb-5" style={{ maxWidth: "1000px  " }}>
                    {champion.lore}
                </p>
            </div>
            <div className="card card-border mb-5 p-4  fontUp">
                <h4 className="text-center championName mb-3">Passif</h4>
                <img 
                className="col-1 d-flex justify-content-center"
                src={`https://ddragon.leagueoflegends.com/cdn/15.24.1/img/passive/${champion.passive.image.full}`} 
                alt={champion.passive.name} />
                <p className="text-center fontUp mb-1">
                    {champion.passive.name}
                </p>

                <p className="text-center fontUp">
                    {champion.passive.description}  
                </p>
            </div>
            <h3 className="text championName text-center mb-4">Sorts</h3>

            <div className="row g-4">
                {champion.spells.map((spell) => (
                    <div key={spell.id} className="col-12 col-md-6 col-lg-3">
                        <div className="card h-100 card-border  p-3">
                            <h5 className="text-center mb-3 championName">{spell.name}</h5>
                            <div className="d-flex justify-content-center mb-3">
                                <img
                                    src={`https://ddragon.leagueoflegends.com/cdn/15.23.1/img/spell/${spell.image.full}`}
                                    alt={spell.name}
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <p className="fontUp text-center">{spell.description}</p>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
