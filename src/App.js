import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowImage from './components/ShowImage';

class App extends Component {
  state = {
    fairPics: null
  }

//fetches image data from job site manager back end
  getFairPics = () => {
    const baseUrl = `http://localhost:3000/api/v1`;
    return fetch(`${baseUrl}/images`, {
    "Content-Type": "application/json",
    Accept: "application/json"
  })
  .then(resp => {
    return resp.json()
  })
    .then(images => this.setState({
      fairPics: images
    }, () => console.log(this.state)))
  }

  componentDidMount() {
    //on mount run getFairPics method
    this.getFairPics()
  }

  //refactor this to use a component
  renderFairImages = () => {
    return this.state.fairPics.map(image => {
      return <img className="image-tag" src={image.image_data} alt={`${image.image_name}`} key={`image-${image.id}`}  />
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.fairPics && this.renderFairImages() }
        //testing ShowImage component
        <ShowImage image={this.state.fairPics[0]} />
      </div>
    );
  }
}

export default App;
