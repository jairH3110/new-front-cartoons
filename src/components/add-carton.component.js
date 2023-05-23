import React, { Component, useState } from "react";
import CartonDataService from "../services/carton.service";
import Reaccion from "./reacciones.components";
import 'firebase/compat/storage'
import firebase from "firebase/compat/app"
export const storage = firebase.storage();
let links;
export default class AddCarton extends Component {
    
  
  constructor(props) {
    super(props);
    this.onChangeCarton = this.onChangeCarton.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePublicado = this.onChangePublicado.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.saveCarton = this.saveCarton.bind(this);
    this.newCarton = this.newCarton.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);

    this.state = {
      carton: "",
      description: "",
      published: false,
      title: "",
      submitted:false,
      file:null,
      file2:null,
      url:"",
      url_img: ""
      
    };
  }

 onChangeFile(e){
  console.log(e.target.files[0]);
  this.setState({
    file : e.target.files[0],
  });
 }


 onChangeFile2(e){
  console.log(e.target.files[0]);
  this.setState({
    file2 : e.target.files[0],
  });
 }



 handleUpload(e, file) {
  e.preventDefault();
  console.log(file);
  alert(file.name); 

  const uploadTask = storage.ref('images/'+ file.name).put(file);
  uploadTask.on("state_changed", console.log, console.error,() => {
    storage
       .ref("")
       .child("images/"+file.name)
       .getDownloadURL()
       .then((myurl) => {
        alert(myurl);
          
          this.setState({url:myurl})
          const imagen= document.getElementById('myimgen')
          imagen.setAttribute('src', myurl)
       });
     
      });
       console.log(uploadTask.myurl);    


      }


      handleimage(e, file) {
        e.preventDefault();
        console.log(file);
        alert(file.name); 
      
        const uploadTask = storage.ref('videos/'+ file.name).put(file);
        uploadTask.on("state_changed", console.log, console.error,() => {
          storage
             .ref("")
             .child("videos/"+file.name)
             .getDownloadURL()
             .then((links) => {
              alert(links);
             
              this.setState({url_img:links})

                const video = document.getElementById('myvideo')
                video.setAttribute('src', links)
             });
             console.log(links);  
            });
             console.log(uploadTask.links);    
            }
      

    

  onChangeCarton(e) {
    this.setState({
      carton: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangePublicado(e) {
    this.setState({
      publicado: e.target.value,
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }



  saveCarton() {
    let data = {
      carton: this.state.carton,
      description: this.state.description,
      published: true,
      title: this.state.title,
      url: this.state.url,
      url_img: this.state.url_img
    };

    CartonDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newCarton() {
    this.setState({
      carton: "",
      description: "",
      published: false,
      title: "", 
      submitted: false,
      url: "",
      url_img: ""
    });
  }

  render() {return (
     <div id="derecha"  className="submit-form">
     
      {/*  {this.state.submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button classNameName="btn btn-success" onClick={this.newCarton}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div classNameName="form-group">
            <label htmlFor="carton">Carton</label>
            <input
              type="text"
              classNameName="form-control"
              id="title"
              required
              value={this.state.carton}
              onChange={this.onChangeCarton}
              name="carton"
            />
          </div>

          <div classNameName="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              classNameName="form-control"
              id="description"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
              name="description"
            />
          </div>

          <div classNameName="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              classNameName="form-control"
              id="title"
              required
              value={this.state.title}
              onChange={this.onChangeTitle}
              name="title"
            />
          </div>
           */} <link rel="stylesheet" href="../App.css"></link>
          <div >
            <form onSubmit= { (event) => {
                  this.handleUpload(event, this.state.file)
                  this.handleimage(event, this.state.file2)
                 
            }} >

              
              <input type="file" onChange={ (event) => {
                this.onChangeFile(event)
                
                
              }
              }multiple/>video
               
               <input type="file" onChange={ (event) => {
                this.onChangeFile2(event)
            
                
              }
              }multiple/>imagen
                
              <button  disabled={!this.state.file}>upload to firebase</button>

              </form>

              {/* <form onSubmit= { (event) => {
                  this.handleimage(event, this.state.file)
            }}>

              </form> */}

              <video   src='' className='myimgen' id='myimgen' alt="necesario para el usoxd" controls type="video/mp4"/>
             
         <Reaccion />
            </div>

           <button onClick={this.saveCarton} className="btn btn-success">
            Submit
          </button> 
        </div>
      )};
    
  
            }
