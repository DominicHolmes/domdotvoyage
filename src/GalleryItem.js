import React, { Component } from 'react';
import './Gallery.css';

class GalleryItem extends Component {
  render() {
    return (
      <div className="GalleryItem-header">
        <div className="GalleryItem-mainImage">
          <h2>Gallery content</h2>
          <h3>More content here</h3>
        </div>
      </div>
    );
  }
}

export default GalleryItem;
