import React, {Component} from 'react';
import axios from 'axios';
import "./index.css";

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

class Index extends Component{

  constructor(props){
    super(props);
    this.state = {
      dataMovie : null
    };
    axios.get('http://backendexample.sanbercloud.com/api/movies')
      .then(res => {
        this.setState({
          dataMovie : res.data
        });
      }
    );
  }

  // render component
  render(){
    return(
      <section className="index-section">
        {/* Table */}
        <h1>Daftar Film Film Terbaik</h1>
        <div>
          <div>
              {
                this.state.dataMovie !== null && this.state.dataMovie.map((item)=>{
                  return(                    
                    <div key={item.id}>
                      <h2>{item.title}</h2>
                      <img className="index-image"src={item.image_url}/>
                      <h2 className="index-sideimg">
                        Rating: {item.rating}<br/>
                        Genre: {item.genre}<br/>
                        Durasi: {item.duration}<br/>
                      </h2>
                      <p><b>Deskripsi: </b>{item.description}</p>
                      <hr/>
                    </div>
                  )
                })}
          </div>
        </div>
      </section>
    )
  }
}

export default Index;