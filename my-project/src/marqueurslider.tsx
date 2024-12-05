import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Game } from "./data";

interface MarqueeSliderProps {
  games: Game[];
}

const MarqueeSlider: React.FC<MarqueeSliderProps> = ({ games }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollWidth = slider.scrollWidth;
    const clientWidth = slider.clientWidth;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition > scrollWidth - clientWidth) {
        scrollPosition = 0;
      }
      slider.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, [games]);

  return (
    <div className="w-full overflow-hidden mt-5">
      <div
        ref={sliderRef}
        className="flex animate-marquee"
        style={{ width: `${games.length * 300}px` }}
      >
        {games.concat(games).map((game, index) => (
          <div
            key={`${game.id}-${index}`}
            className="w-[280px] flex-shrink-0 mx-2"
          >
            <Link to={`/game/${game.id}`}>
              <div className="border-[#123330] border-2 border-solid rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-2 text-white truncate">
                  {game.title}
                </h3>
                <h4 className="text-gray-600">${game.price.toFixed(2)}</h4>
                <a
                  href={`/game/${game.id}`}
                  className="flex w-full rounded-lg items-center justify-center p-2 bg-[#00fe9c]"
                >
                  Buy
                </a>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
