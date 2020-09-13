import React, {useContext} from "react"
import axios from 'axios'
import {MovieContext} from "./movie_context"


const FruitTable = () =>{
  const [dataMovie, setDataMovie, inputMovie, setInputMovie, edit, setEdit]= useContext(MovieContext);

  // ketika button delete ditekan
  const handleDeleteSubmit = (event) => {
    const ID_MOVIES = parseInt(event.target.value);
    axios.delete(`http://backendexample.sanbercloud.com/api/movies/${ID_MOVIES}`)
    .then(res => {
      const newDataMovie = dataMovie.filter(movie => movie.id !== ID_MOVIES)
      setDataMovie(newDataMovie);
    })
  }

  // Untuk memunculkan form editing
  const openEditForm = (event) => {
    setEdit({
      status : true,
      id : parseInt(event.target.value)
    });
    const idx = dataMovie.findIndex((e) => e.id === parseInt(event.target.value));
    setInputMovie({
      ...inputMovie,
      title       : dataMovie[idx].title,
      description : dataMovie[idx].description,
      year        : dataMovie[idx].year,
      duration    : dataMovie[idx].duration,
      genre       : dataMovie[idx].genre,
      rating      : dataMovie[idx].rating,
      image_url   : dataMovie[idx].image_url
    });
  }

  // Untuk menghilangkan form editing
  const closeEditForm = () => {
    setEdit({
      status: false,
      id: null
    })
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
  }

  const truncString = (str) => {
    if (str!==null){
      if (str.length > 20) {
        return (str.substring(0, 19) + "...") ;
      }
    }
    return str;
  }

  const handleSearchChange = (event) => {
    setInputMovie({...inputMovie, search : event.target.value});
  }

  const handleSearch = (event) => {
    event.preventDefault();
    if (inputMovie.search!==""){
      var newDataMovie = dataMovie.filter(movie => movie.title.toLowerCase().includes(inputMovie.search.toLowerCase()))
      setDataMovie(newDataMovie);
    } else {
      axios.get(`http://backendexample.sanbercloud.com/api/movies`)
      .then(res => {
        setDataMovie(res.data);
      }) 
    }
  }
  return (  
    <div>
    <form className="form_edit" onSubmit={handleSearch}>
      <input type="text" name="search" value={inputMovie.search} onChange={handleSearchChange}></input>
      <input type="submit"></input>
    </form>
    <h1>Daftar Film</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="th">No</th>
            <th className="th">Title</th>
            <th className="th">Description</th>
            <th className="th">Year</th>
            <th className="th">Duration</th>
            <th className="th">Genre</th>
            <th className="th">Rating</th>
            <th className="th">Action</th>            
          </tr>
        </thead>
        <tbody>
            {
              dataMovie !== null && dataMovie.map((item, index)=>{
                return(      
                  <tr key={item.id}>
                    <td className="td">{index}</td>
                    <td className="td">{item.title}</td>
                    <td className="td">{truncString(item.description)}</td>
                    <td className="td">{item.year}</td>
                    <td className="td">{item.duration}</td>
                    <td className="td">{item.genre}</td>
                    <td className="td">{item.rating}</td>
                    <td className="td">
                      {
                        edit.status ?
                          <button value={item.id} onClick={closeEditForm}>Add</button>
                        : <button value={item.id} onClick={openEditForm}>Edit</button>
                      }
                      <button value={item.id} onClick={handleDeleteSubmit}>Delete</button>
                    </td>
                  </tr>
                )
              })}
        </tbody>
      </table>
    </div>
  );
}

export default FruitTable