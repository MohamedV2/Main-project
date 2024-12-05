import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameDetails from "./GameDetails";
import ErrorBoundary from "./ErrorBoundary.tsx";
import Home from "./Home.tsx";
import GameList from "./GameList";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="container flex flex-col w-full mx-auto p-5">
      <NavBar />
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route path="/list/" element={<GameList />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
