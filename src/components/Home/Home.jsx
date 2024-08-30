import "./Home.css";
import { useEffect, useRef } from "react";
import Data from "../../data.json";
import { Link } from "react-router-dom";

const Home = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const galleryItems = galleryRef.current.querySelectorAll(".galleryItem");
    let delay = 0.03;
    galleryItems.forEach((item) => {
      item.style.animationDelay = delay + "s";
      delay += 0.04;
    });
  }, []);

  return (
    <main>
      <div className="gallery" ref={galleryRef}>
        {Data.map((item) => (
          <Link
            className="galleryItem"
            to={`/gallery-image/${item.id}`}
            key={item.name}
          >
            <div className="shadow"></div>
            <img src={item.images.thumbnail} alt={item.name} />
            <div className="artist">
              <h2>{item.name}</h2>
              <p>{item.artist.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
