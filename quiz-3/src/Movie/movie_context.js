import React, { useState, createContext, useEffect} from "react";
import axios from 'axios'

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [dataMovie, setDataMovie] = useState(null);
  const [inputMovie, setInputMovie] = useState({
    search: "",
    title: "",
    description: "",
    year: 2020,
    duration: 120,
    genre: "",
    rating: 0,
    image_url: ""
  });
  const [edit, setEdit] = useState({
    status: false,
    id: null
  });

  useEffect(() => {
    if (dataMovie === null){
      axios.get(`http://backendexample.sanbercloud.com/api/movies`)
      .then(res => {
        setDataMovie(res.data);
      }) 
    }
  }, [dataMovie]);

  return (
    <MovieContext.Provider value={[dataMovie, setDataMovie, inputMovie, setInputMovie, edit, setEdit]}>
      {props.children}
    </MovieContext.Provider>
  );
};