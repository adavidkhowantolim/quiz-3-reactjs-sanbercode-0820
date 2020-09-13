import React from "react"
import {MovieProvider} from "./movie_context"
import MovieTable from "./movie_table"
import MovieForm from "./movie_form"
import './movie.css';

const MovieListEditor = () =>{
  return(
    <div className="movie-div">
      <MovieProvider>
        <MovieTable/>
        <MovieForm/>
      </MovieProvider>
    </div>
  )
}

export default MovieListEditor