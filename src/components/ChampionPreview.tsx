import { useAllChampions } from "../hooks/useAllChampion";

export function ChampionPreview(){
    const championList = useAllChampions();

    return (
        <>
            {championList.map((champion) => (
                <a
                    href={`/champion/${champion.id}`}
                    className="card py-4 col-12 card-border my-2 mx-5 noStyle"
                    key={champion.id}
                >
                    <img src={champion.image.full} alt="Image de " />
                    <div className="card-body">
                        <p className="card-title championName d-flex justify-content-center">
                            {champion.name}
                        </p>
                        <p className="card-text d-flex justify-content-center align-self-start">
                            {champion.title}
                        </p>
                        <p className="card-text">{champion.blurb}</p>
                    </div>
                </a>
            ))}
        </>
    );

}