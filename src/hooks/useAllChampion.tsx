import { useEffect, useState } from "react";
import axios from "axios";
import type { Champion } from "../types/ChampionType";

export function useAllChampions() {
    const [championList, setChampionList] = useState<Champion[]>([]);

    useEffect(() => {
        const getAllChampions = async () => {
            const ALL_CHAMPIONS_URL =
                "https://ddragon.leagueoflegends.com/cdn/15.23.1/data/fr_FR/champion.json";

            try {
                const response = await axios.get(ALL_CHAMPIONS_URL);
                const champions: Champion[] = Object.values(response.data.data);
                setChampionList(champions);
            } catch (error) {
                console.log("Erreur lors du chargement des champions", error);
            }
        };

        getAllChampions();
    }, []);

    return championList;
}