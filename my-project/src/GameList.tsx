import { useState } from "react";
import { Link } from "react-router-dom";
import { gamesData } from "./data";

function GameList() {
  const [selectedProvider, setSelectedProvider] = useState("Select Games");
  const [searchQuery, setSearchQuery] = useState("");

  const providers = [
    "Select Games",
    ...new Set(gamesData.map((game) => game.provider)),
  ];

  const filteredGames = gamesData.filter((game) => {
    const providerMatch =
      selectedProvider === "Select Games" ||
      game.provider.toLowerCase() === selectedProvider.toLowerCase();
    const nameMatch = game.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return providerMatch && nameMatch;
  });

  return (
    <div className="flex flex-col w-full mt-5 bg-[#101013] p-4 rounded-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex justify-center">
          Game Search
        </h2>
      </div>

      <div className="mb-6 flex justify-between items-center gap-2">
        <input
          type="text"
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 rounded-lg bg-[#101013] text-white outline-none w-full border-[#123330] border-2 border-solid"
        />
        <select
          value={selectedProvider}
          onChange={(e) => setSelectedProvider(e.target.value)}
          className="p-2 rounded-lg bg-[#101013] text-white border-[#123330] border-2 border-solid outline-none"
        >
          {providers.map((provider) => (
            <option key={provider} value={provider}>
              {provider}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {filteredGames.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id}>
            <div className="border-[#123330] border-2 border-solid rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-auto rounded"
              />
              <h3 className="text-lg font-semibold mt-2 text-white">
                {game.title}
              </h3>
              <h4 className="text-gray-600">${game.price.toFixed(2)}</h4>
              <a
                href={`/game/${game.id}`}
                className="flex w-full rounded-lg items-center justify-center p-2 bg-lime-600 mt-2"
              >
                Buy
              </a>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GameList;
