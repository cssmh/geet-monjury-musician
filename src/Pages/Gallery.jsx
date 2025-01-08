import img1 from "../assets/monjory_singer.jpg";
import img2 from "../assets/artist2.jpg";
import img3 from "../assets/img.jpg";
import img4 from "../assets/img2.jpg";
import img5 from "../assets/img3.jpg";
import img6 from "../assets/img4.jpg";
import img7 from "../assets/img6.jpg";
import img8 from "../assets/img5.jpg";
import img9 from "../assets/img7.jpg";
import img10 from "../assets/img8.jpg";
import img11 from "../assets/img9.jpg";
import img12 from "../assets/img10.jpg";

const Gallery = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <div className="max-w-7xl mx-auto mt-2 mb-8 px-4">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="mb-4 transform transition-transform hover:scale-105"
          >
            <img
              className="w-full rounded-lg shadow-lg"
              src={image}
              alt={`Gallery Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
