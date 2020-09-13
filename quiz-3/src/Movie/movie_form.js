import React, {useContext} from "react"
import axios from 'axios'
import {MovieContext} from "./movie_context"

const MovieForm = () =>{
  const [dataMovie, setDataMovie, inputMovie, setInputMovie, edit, setEdit]= useContext(MovieContext);

  const handleEditChange = (event) => {
    switch (event.target.name){
      case "title": {
        setInputMovie({...inputMovie, title : event.target.value});
        break;
      }
      case "description": {
        setInputMovie({...inputMovie, description : event.target.value});
        break;
      }
      case "year": {
        setInputMovie({...inputMovie, year : parseInt(event.target.value)});
        break;
      }
      case "duration": {
        setInputMovie({...inputMovie, duration : parseInt(event.target.value)});
        break;
      }
      case "genre": {
        setInputMovie({...inputMovie, genre : event.target.value});
        break;
      }
      case "rating": {
        setInputMovie({...inputMovie, rating : parseInt(event.target.value)});
        break;
      }
      case "image_url": {
        setInputMovie({...inputMovie, image_url : event.target.value});
        break;
      }
      default:
        break;
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (edit.status){
      axios.put(`http://backendexample.sanbercloud.com/api/movies/${edit.id}`, {
        title       : inputMovie.title,
        description : inputMovie.description,
        year        : inputMovie.year,
        duration    : inputMovie.duration,
        genre       : inputMovie.genre,
        rating      : inputMovie.rating,
        image_url   : inputMovie.image_url
      })
      .then(res => {
        var newDataMovie = dataMovie.map(movie => {
          if (movie.id === edit.id){
            movie.title       = inputMovie.title;
            movie.description = inputMovie.description;
            movie.year        = inputMovie.year;
            movie.duration    = inputMovie.duration;
            movie.genre       = inputMovie.genre;
            movie.rating      = inputMovie.rating;
            movie.image_url   = inputMovie.image_url;
          }
          return movie;
        });
        setDataMovie(newDataMovie);
      })
    } else {
      axios.post(`http://backendexample.sanbercloud.com/api/movies`, {
        title       : inputMovie.title,
        description : inputMovie.description,
        year        : inputMovie.year,
        duration    : inputMovie.duration,
        genre       : inputMovie.genre,
        rating      : inputMovie.rating,
        image_url   : inputMovie.image_url
      })
      .then(res => {
        var data = res.data;
        setDataMovie([...dataMovie, 
          {
            id: data.id, 
            title       : data.title,
            description : data.description,
            year        : data.year,
            duration    : data.duration,
            genre       : data.genre,
            rating      : data.rating,
            image_url   : data.image_url
          }
        ]);
        setInputMovie({
          ...inputMovie,
          title: "",
          description: "",
          year: 2020,
          duration: 120,
          genre: "",
          rating: 0,
          image_url: ""
        });
      })
    }
  }

  return (
    <>
      <h1>Movies Form</h1>
      <form className="form_edit" onSubmit={handleSubmit} id="editForm">
        <table className="table_form">
          <tr>
            <td><label className="label">Title:  </label></td>
            <td><input type="text" name="title" value={inputMovie.title} onChange={handleEditChange}></input></td>
          </tr>
          <br/>
          <tr>
            <td><label className="label">Description: </label></td>
            <td><textarea type="text" name="description" value={inputMovie.description} onChange={handleEditChange} rows="3" cols="50"></textarea></td>
          </tr>
          <br/>
          <tr>
            <td><label className="label">Year:  </label></td>
            <td><input type="number" name="year" value={inputMovie.year} onChange={handleEditChange} min="1980"step="1" ></input></td>
          </tr>
          <br/>
          <tr>
            <td><label className="label">Duration:  </label></td>
            <td><input type="number" name="duration" value={inputMovie.duration} onChange={handleEditChange} min="0"></input></td>
          </tr>
          <br/>
          <tr>
            <td><label className="label">Genre:  </label></td>
            <td><input type="text" name="genre" value={inputMovie.genre} onChange={handleEditChange}></input></td>
          </tr>
          <br/>
          <tr>
            <td><label className="label">Rating:  </label></td>
            <td><input type="number" name="rating" value={inputMovie.rating} onChange={handleEditChange} min="0" max="10" step="1" ></input></td>
          </tr>
          <br/>
          <tr>
            <td><label className="label">Image_url:  </label></td>
            <td><textarea type="url" name="image_url" value={inputMovie.image_url} onChange={handleEditChange} rows="3" cols="50"></textarea></td>
          </tr>
        </table>
        <br/>
        <input type="submit"></input>
      </form>
    </>
  )
}

export default MovieForm