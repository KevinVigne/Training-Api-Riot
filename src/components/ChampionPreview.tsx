import { useAllChampions } from "../hooks/useAllChampion";

export function ChampionPreview() {
    const championList = useAllChampions();

    return (
        <div className="championContainer">
            {championList.map((champion) => (
                <a
                    href={`/champion/${champion.id}`}
                    className="card card-border championCard noStyle"
                    key={champion.id}
                >
                    <div className="card-body text-center">
                        <p className="card-title championName mb-2">
                            {champion.name}
                        </p>
                        <img
                            className="championImage mb-3"
                            src={`https://ddragon.leagueoflegends.com/cdn/15.23.1/img/champion/${champion.image.full}`}
                            alt={`Image de ${champion.name}`}
                            width={110}
                        />
                        <p className="card-text">{champion.title}</p>
                        <p className="card-text small">{champion.blurb}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}
