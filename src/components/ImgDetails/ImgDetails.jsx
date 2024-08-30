import "./ImgDetails.css";
import Data from "../../data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import enlargeIcon from "../../../public/images/shared/icon-view-image.svg";
import Carousel from "../Carousel/Carousel";

const ImgDetails = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { id } = useParams();
  const image = Data.find((item) => item.id === parseInt(id));
  
  const toggleFullscreen = () => {
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  if (!image) {
    return <div>Image not found</div>;
  }

  const images = Data.filter((item) => item.gallery === image.gallery);

  const [ImageIndex, setImageIndex] = useState(
    images.findIndex((item) => item.id === image.id)
  );

  const prevImage = () =>
    setImageIndex(
      (ImageIndex - 1 + images.length) % images.length
    );
  const nextImage = () =>
    setImageIndex((ImageIndex + 1) % images.length);

  return (
    <div className="main_container">
      <div className="desktopWrapper">
        <div className="heroTitleWrapper">
          <img
            src={images[ImageIndex].images.hero.small}
            
            alt={images[ImageIndex].name}
            className="hero"
          ></img>
          <img
            src={images[ImageIndex].images.hero.large}
            alt={images[ImageIndex].name}
            className="heroLarge"
          ></img>          

          {isFullScreen && (
            <div className="full-screen">
              <button className="close" onClick={handleCloseFullScreen}>Close</button>
              <img
                src={images[ImageIndex].images.hero.large}
                alt={images[ImageIndex].name}
                className="mobile-image"

              />
            </div> 
          )}

          <div className="viewBtn_container">
            <button
              className="viewBtn"
              type="button"
              onClick={toggleFullscreen}
            >
              <img src={enlargeIcon} alt="View image icon" />
              view image
            </button>
          </div>
          <div className="artist_container">
            <h1>{images[ImageIndex].name}</h1>
            <p>{images[ImageIndex].artist.name}</p>
          </div>
          <img
            className="artist_img"
            src={images[ImageIndex].artist.image}
            alt={images[ImageIndex].artist.name}
          />
        </div>

        <div className="img_details">
          <div className="description_container">
            <p className="img_description">{images[ImageIndex].description}</p>
            <p className="year">{images[ImageIndex].year}</p>
          </div>
          <a className="sourceLink" href={images[ImageIndex].source}>
            Go to source
          </a>
        </div>
      </div>
      <Carousel
        images={images}
        ImageIndex={ImageIndex}
        onPrevImage={prevImage}
        onNextImage={nextImage}
      />
    </div>
  );
};

export default ImgDetails;
