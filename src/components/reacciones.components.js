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

  kafkaService.reaction("Like");
  e.preventDefault();

  
}

function saveLove(e, status) {
  
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  kafkaService.reaction("Love");
  e.preventDefault();

  
}

function saveJaja(e, status) {
  
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  kafkaService.reaction("Enrisa");
  e.preventDefault();

  
}

function saveSad(e, status) {
  
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  kafkaService.reaction("Sadness");
  e.preventDefault();

  
}


function saveAngry(e, status) {
  
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  kafkaService.reaction("Angry");
  e.preventDefault();

  
}

function saveAsom(e, status) {
  
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  kafkaService.reaction("Asombrao");
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
                    saveAsom(e, 1) }} /></span>
           <span ><img src={enc} alt=""  onClick={(e) => { e.preventDefault(); saveLove(e, 1) }} /></span>
           <span ><img src={gusta} alt=""  onClick={(e) => { e.preventDefault(); saveLike(e, 1) }} /></span>
           <span ><img src={awita} alt=""   onClick={(e) => { e.preventDefault(); saveSad(e, 1) }}/></span>
           <span ><img src={angry} alt=""   onClick={(e) => { e.preventDefault(); saveAngry(e, 1) }}/></span>
           <span ><img src={enrisa} alt=""  onClick={(e) => { e.preventDefault(); saveJaja(e, 1) }} /></span>
           
        </div>
        <button onClick={this.mostrar1} id="titulo">reacciones</button>
        
   </div>   
    )
  }
}

export default Reaccion;
