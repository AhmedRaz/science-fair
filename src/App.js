import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    fairPics: null
  }

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
    this.getFairPics()
  }

  renderFairImages = () => {
    return this.state.fairPics.map(image => {
      return <img className="image-tag" src={image.image_data} alt={`${image.image_name}`} key={`image-${image.id}`}  />
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { this.state.fairPics && this.renderFairImages() }
      </div>
    );
  }
}

export default App;
