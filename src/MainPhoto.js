import React, { Component } from 'react';
import axios from 'axios' ;


class MainPhoto extends Component {
    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://weddingnew.herokuapp.com/places/7`)
        .then(data =>{
           
        
                console.log(data)
          
           document.getElementById("img7").src = data.data.data.img
          
         
        })
        axios.get(`https://cors-anywhere.herokuapp.com/https://weddingnew.herokuapp.com/places/8`)
        .then(data =>{
           
        
                console.log(data)
          
           document.getElementById("img8").src = data.data.data.img
          
         
        })
        axios.get(`https://cors-anywhere.herokuapp.com/https://weddingnew.herokuapp.com/places/9`)
        .then(data =>{
           
        
                console.log(data)
          
           document.getElementById("img9").src = data.data.data.img
          
         
        })
    }
    render() {
        return (
            <div>
                 <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src=" " id="img7" alt="First slide"></img>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src=" "  id="img8" alt="Second slide"></img>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src=" " id="img9" alt="Third slide"></img>
            </div>
          </div>
            </div>
        );
    }
}

export default MainPhoto;