import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { PHOTO_SET } from "./constants";
import { TEXT_SET } from "./constants";
import Modal from "react-modal";

export default class PhotosBanner extends Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: 0,
      lightboxIsOpen: false
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  renderImage = () => {
    return (
      <div>
        <img
          className={"photos_modal"}
          src={PHOTO_SET[this.state.currentImageIndex].src}
        />
      </div>
    );
  };

  openLightbox = (event, obj) => {
    this.setState({
      currentImageIndex: obj.index,
      lightboxIsOpen: true
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };

  render() {
    console.log("photo set", PHOTO_SET);
    return (
      <div className="gallery">
        <div className="text">
          <div className="tiret" />
          <h4 className="text_gallery">&nbsp;&nbsp;&nbsp;GALLERY</h4>
        </div>
        <h2 className="text_workshop">Our Workshop</h2>
        <div className="container_hidden">
          <Gallery
            className={"photos"}
            photos={PHOTO_SET}
            onClick={this.openLightbox}
            columns={1}
          />
          <Modal
            className={"modal"}
            onRequestClose={this.closeLightbox}
            isOpen={this.state.lightboxIsOpen}
          >
            <span className="close" onClick={this.closeLightbox}>
              &times;
            </span>
            <div className="contents">
              <div className="container_photos">{this.renderImage()}</div>
              <div className="container_text">
                <p className="modal_text">
                  {TEXT_SET[this.state.currentImageIndex]}
                </p>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}
