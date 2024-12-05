// // src/data.ts

export interface Game {
  id: number;
  title: string;
  price: number;
  image: string;
  sales: number;
  hot: boolean;
}

export const gamesData = [
  {
    id: 1,
    title: "Minecraft Java & Bedrock Edit",
    price: 10.0,
    image: "/public/Untitled-2.jpg",
    sales: 5,
    hot: false,
    provider: "epic",
  },
  {
    id: 2,
    title: "Black Myth: Wukong",
    price: 38.0,
    image: "/public/Untitled-2.jpg",
    sales: 5,
    hot: true,
    provider: "steam",
  },
  {
    id: 3,
    title: "Assassin's Creed Valhalla",
    price: 5.0,
    image: "/public/Untitled-2.jpg",
    sales: 20,
    hot: true,
    provider: "epic",
  },
  {
    id: 4,
    title: "Cyberpunk 2077",
    price: 12.0,
    image: "/public/Untitled-2.jpg",
    sales: 6,
    hot: true,
    provider: "origin",
  },
  {
    id: 5,
    title: "Cyberpunk 2077",
    price: 12.0,
    image: "/public/Untitled-2.jpg",
    sales: 10,
    hot: true,
    provider: "epic",
  },
  {
    id: 6,
    title: "Cyberpunk 2077",
    price: 12.0,
    image: "/public/Untitled-2.jpg",
    sales: 1,
    hot: true,
    availble: true,
    provider: "steam",
  },
  {
    id: 7,
    title: "Cyberpunk 2077",
    price: 12.0,
    image: "/public/Untitled-2.jpg",
    sales: 0,
    hot: true,
    provider: "epic",
  },
  {
    id: 8,
    title: "Cyberpunk 2077",
    price: 12.0,
    image: "/public/Untitled-2.jpg",
    sales: 3,
    hot: true,
    provider: "ea",
  },
];
