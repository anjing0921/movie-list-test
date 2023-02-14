import React from 'react'
import './SingleContent.css'
import "./SingleContent.css";

const SingleContent = ({id,
  poster,
  title,
  date,
  media_type,
  vote_average,}) => {
  return (
    <>
    
    <div className='media'>
    <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w200${poster}`}
        alt={`${title} Poster`}
      />
    <b className="title">{title}</b>
    <span className="subTitle">
      {media_type === "tv" ? "TV Series" : "Movie"}
    <span className="subTitle">{date}</span>
    </span>
    </div>
    </>
  )
}

export default SingleContent