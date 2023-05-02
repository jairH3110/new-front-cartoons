import React, { Component } from "react";
import CartonDataService from "../services/carton.service";

export default class Carton extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateCarton = this.updateCarton.bind(this);
    this.deleteCarton = this.deleteCarton.bind(this);

    this.state = {
      currentCarton: {
        id: null,
        carton: "",
        description: "",
        published: false,
        title: "",
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { carton } = nextProps;
    if (prevState.currentCarton.id !== carton.id) {
      return {
        currentCarton: carton,
        message: ""
      };
    }

    return prevState.currentCarton;
  }

  componentDidMount() {
    this.setState({
      currentCarton: this.props.carton,
    });
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCarton: {
          ...prevState.currentCarton,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentCarton: {
        ...prevState.currentCarton,
        description: description,
      },
    }));
  }

  updatePublished(status) {
    CartonDataService.update(this.state.currentCarton.id, {
      published: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentCarton: {
            ...prevState.currentCarton,
            published: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateCarton() {
    const data = {
      title: this.state.currentCarton.title,
      description: this.state.currentCarton.description,
    };

    CartonDataService.update(this.state.currentCarton.id, data)
      .then(() => {
        this.setState({
          message: "The Carton was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteCarton() {
    CartonDataService.delete(this.state.currentCarton.id)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render()  {
    const { currentCarton } = this.state;

    return (
      <div>
        <h4>Carton</h4>
        {currentCarton ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentCarton.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentCarton.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentCarton.published ? "Published" : "Pending"}
              </div>

              <video   src={currentCarton.url} className='imagen' id='myimg' alt="necesario para el usoxd" controls type="video/mp4"/>

            </form>

            {currentCarton.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteCarton}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateCarton}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Carton...</p>
          </div>
        )}
      </div>
    );
  }
} 
