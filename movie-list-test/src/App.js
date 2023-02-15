import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { Container } from "@material-ui/core";
import Trending from "./Pages/Treading/Trending";
import Movies from "./Pages/Movies/Movies";
import Login from "./Pages/Login/Login";
import Search from "./Pages/Search/Search";
import Watchlist from "./components/Watchlist";


function App() {
  return (
    <BrowserRouter>
      <span>
        <Header/>
      </span>
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/list" element={<Watchlist />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
