import React, { Component } from 'react'
import asom from "../images/asombra2.gif";
import enc from "../images/ENCANTA.gif";
import gusta from "../images/gusta.gif";
import awita from "../images/entristece.gif";
import angry from "../images/enoja.gif";
import enrisa from "../images/divierte.gif";
import kafkaService from '../services/kafka.service'; 

function saveLike(e, status) {
  
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  kafkaService.reaction("i-love-adsoftsito");
  e.preventDefault();

  
}


class Reaccion extends Component {

    
     mostrar1(){
      if (
        document.getElementById("cont-iconos") 
      ) {
        document.getElementById("cont-iconos").style.opacity = 1;
         }
}


desaparecer(){
  if (
    document.getElementById("cont-iconos") 
  ) {
    document.getElementById("cont-iconos").style.opacity = 0;
     }
}
  render() {
    return (
      
        <div  >
        <div  id="cont-iconos" onClick={this.desaparecer}>
           <span  ><img  src={asom} alt=""  onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1) }} /></span>
           <span ><img src={enc} alt="" onClick={this.desaparecer} /></span>
           <span ><img src={gusta} alt="" onClick={this.desaparecer} /></span>
           <span ><img src={awita} alt=""  onClick={this.desaparecer}/></span>
           <span ><img src={angry} alt=""  onClick={this.desaparecer}/></span>
           <span ><img src={enrisa} alt="" onClick={this.desaparecer} /></span>
           
        </div>
        <button onClick={this.mostrar1} id="titulo">reacciones</button>
        
   </div>   
    )
  }
}

export default Reaccion;
