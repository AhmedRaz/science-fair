import React, { Component } from 'react';

class ShowImage extends Component {

  render() {
    return (
      <React.Fragment>
        <img className="image-tag" src={this.props.image_data} alt={`${this.props.image_name}`} />
      </React.Fragment>
    )
  }
}

export default ShowImage
