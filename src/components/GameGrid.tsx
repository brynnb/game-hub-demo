import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

interface Game {
  id: number;
  name: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  });

  return (
    <>
      {" "}
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
