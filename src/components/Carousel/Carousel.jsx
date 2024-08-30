import "./Carousel.css";
import React from "react";
import Previous from "../../../public/images/shared/icon-back-button.svg";
import Next from "../../../public/images/shared/icon-next-button.svg";
import ProgressBar from "../ProgressBar/ProgressBar";

const Carousel = ({images, ImageIndex, onPrevImage, onNextImage}) => {
  return (
    <div className="CarouselContainer">
      <ProgressBar ImageIndex={ImageIndex} images={images} />
      <div className="TopLine"></div>
      <div className="CarouselTitle">
        <h2>{images[ImageIndex].name}</h2>
        <p>{images[ImageIndex].artist.name}</p>
      </div>
      <div className="CarouselButtons">
        <button onClick={onPrevImage}>
          <img src={Previous} alt="back button"></img>
        </button>
        <button onClick={onNextImage}>
          <img src={Next} alt="next button"></img>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
