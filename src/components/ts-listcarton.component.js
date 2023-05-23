import React, { Component } from "react";
import CartonDataService from "../services/carton.service";

import Carton from "../components/tcarton.component";

export default class CartonList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCarton = this.setActiveCarton.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      cartons: [],
      currentCarton: null,
      currentIndex: -1,
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = CartonDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let cartons = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
        cartons.push({
        id: id,
        carton: data.carton,
        description: data.description,
        published: data.published,
        title: data.title,
        url: data.url,
        url_img: data.url_img
      });
    });

    this.setState({
      cartons: cartons,
    });
  }

  refreshList() {
    this.setState({
      currenCarton: null,
      currentIndex: -1,
    });
  }

  setActiveCarton(carton, index) {
    this.setState({
      currentCarton: carton,
      currentIndex: index,
    });
  }

  render() { const { cartons, currentCarton, currentIndex } = this.state;

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>añadidos recientemente </h4>

        <ul className="list-group">
          {cartons &&
            cartons.map((carton, index) => (
              <li
                className={ "list-group-item " + (index === currentIndex ? "active" : "") }
                onClick={() => this.setActiveCarton(carton, index)}
                key={index}
              >
             <div>  <img src={carton.url_img}  className="img"  alt="algo para que asirva"></img> 
            
             </div>
             
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentCarton ? (
          <Carton
            carton={currentCarton}
            refreshList={this.refreshList}
          />
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    </div>
  );
}
}
