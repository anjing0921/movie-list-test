import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data.results);
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
    </div>
  );
};

export default Trending;
