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
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [trendingContent, setTrendingContent] = useState([]);
  const [moviesContent, setMoviesContent] = useState([]);
  const [page, setPage] = useState(1);
  const [watchlist, setWatchList] = useState([
    {
      id: 505642,
      title: "Black Panther: Wakanda Forever",
      poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    },
  ]);
  console.log(watchlist);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    //console.log(data.results);
    setTrendingContent(data.results);
  };
  // useEffect(() => {
  //   fetchTrending();
  // }, [page]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&sort_by=popularity.desc&page=1&vote_average.gte=8.5&include_adult=false`
    );
    setMoviesContent(data.results);
    //console.log(data.results)
    // console.log(data.results[0].id)
    // console.log(data.results.title)
    //setNumOfPages(data.total_pages);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
  }, []);

  return (
    <BrowserRouter>
      <span>
        <Header />
      </span>
      <div className="app">
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <Trending
                  page={page}
                  trendingContent={trendingContent}
                  setPage={setPage}
                  watchlist={watchlist}
                  setWatchList={setWatchList}
                  fetchTrending={fetchTrending}
                />
              }
            />
            <Route
              path="/movies"
              element={<Movies moviesContent={moviesContent} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/list"
              element={
                <Watchlist watchlist={watchlist} setWatchList={setWatchList} />
              }
            />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
