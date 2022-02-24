import HomePage from "./pages/home-page";
import MoviePage from "./pages/movie-reservation-page";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie-reservation" element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
