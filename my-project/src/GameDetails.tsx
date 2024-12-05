// src/GameDetails.tsx

import { useParams } from "react-router-dom";
import { gamesData, Game } from "./data";

function GameDetails() {
  const { id } = useParams<{ id: string }>();
  const game: Game | undefined = gamesData.find(
    (game) => game.id === parseInt(id || "", 10)
  );

  if (!game) {
    return (
      <a
        href="/"
        className="text-center text-white flex w-full rounded-lg items-center justify-center p-2 bg-red-600 mt-2"
      >
        Game not found.
      </a>
    );
  }

  console.log(game.image);

  return (
    <div className="flex items-center justify-between">
      <img src={game.image} alt={game.title} className="w-40" />
      <div>
        <h3 className="text-lg font-semibold mt-2 text-white">{game.title}</h3>
        <h4 className="text-gray-600">${game.price.toFixed(2)}</h4>
        <button
          // href={`/game/${game.id}`}
          className="flex w-full rounded-lg items-center justify-center p-2 bg-lime-600 mt-2"
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default GameDetails;
