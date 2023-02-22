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
    // {id:32593,
    // title: "Snow White: The Fairest of Them All",
    // poster: "/xIjplbyfFDbHsN7ZK40klO5nnUw.jpg"
    // },
    // {
    //   id:634649,
    //   title: "Spider-Man: No Way Home",
    //   poster: "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"

    // },
    // {
    //   id:767,
    //   title: "Harry Potter and the Half-Blood Prince",
    //   poster: "/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg"

    // }


  ]);
  const [searchContent, setSearchContent] = useState([]);
 
  const fetchWatchList = async () => {
    const { data } = await axios.get('https://movie-star-back-end.herokuapp.com/viewers/2/watchlist');
    //console.log(data);
    setWatchList(data)
  };
  useEffect(() => {
    fetchWatchList();
  }, []);

  // const deleteWatchList = async (id) => {
  //   const { data } = await axios.get('https://movie-star-back-end.herokuapp.com/viewers/2/watchlist');
  //   console.log(data);
  //   // const newWatchList = watchlist.filter((movie) => movie.id !== id );
  //   // console.log(newWatchList);
  //   // setWatchList(
  //   // newWatchList
  //   //  )
  // };
  // useEffect(() => {
  //   deleteWatchList();
  // }, []);

  // const deleteWatchList = async () => {
  //   const { data } = await axios.get('https://movie-star-back-end.herokuapp.com/viewers/2/watchlist');
  //   //console.log(data);
  //   setWatchList(data)
  // };
  // useEffect(() => {
  //   deleteWatchList();
  // }, []);


  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    //console.log(data.results);
    setTrendingContent(data.results);
  };


  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&sort_by=popularity.desc&page=1&vote_average.gte=8.5&include_adult=false`
    );
    setMoviesContent(data.results);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
  }, []);


  // const fetchSearch = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=${
  //         process.env.REACT_APP_API_KEY
  //       }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
  //     );
  //     setSearchContent(data.results);
  //     //setNumOfPages(data.total_pages);
  //     // console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };




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
              element={<Movies moviesContent={moviesContent} watchlist={watchlist}
              setWatchList={setWatchList}/>}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search searchContent={searchContent} setWatchList={setWatchList} watchlist={watchlist}/>} />
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
