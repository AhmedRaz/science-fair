import React, { Component } from 'react';

class ShowImage extends Component {

  render() {
    //show images from props
    console.log("inside ShowImage", this.props)
    return (
      <div>
        <img className="image-tag" src={this.props.image.image_data} alt={`${this.props.image.image_name}`} />
      </div>
    )
  }
}

export default ShowImage
