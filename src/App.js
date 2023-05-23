import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import firestore from "./firebase";
import { listAll } from "firebase/storage";
import AddCarton from "./components/add-carton.component";
import CartonList from "./components/ts-listcarton.component";

class App extends Component {

  
  render() {
    const listvideos = () =>{
      listAll("/images")
    };
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark"> <img src='https://lh3.ggpht.com/OOXV4V9YyovafA10xZhq0QgWNwFwCEhMI9kWJ2FDkjMmLa7rDWJmSmnsgOtMWdDGg3A=w300'   width="40"
     height="41" alt=""></img>
          <a href="/tutorials" className="navbar-brand">
            
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                añadir
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                visualizar-carton
              </Link>
            </li>
          </div>
        </nav>

        <button onClick={listvideos}>listar</button>
           
        <div className="container mt-3">                               
          <h2>reproductor youtube con firebase</h2>
          <Routes>

            <Route exact path="/tutorials" element={<CartonList />} />
            <Route exact path="/add" element={<AddCarton/>} />
          
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;