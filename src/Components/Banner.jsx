import banner from "../assets/banner.jpeg";
import band from "../assets/artist.jpg";
import band1 from "../assets/band.jpg";
import band2 from "../assets/bang2.jpg";
import band3 from "../assets/band3.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Banner = () => {
  const images = [banner, band1, band, band2, band3];

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-2 lg:right-5 transform -translate-y-1/2 z-10 cursor-pointer text-white p-2 rounded-full focus:outline-none transition-transform hover:scale-110"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <AiOutlineRight size={24} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 lg:left-5 transform -translate-y-1/2 z-10 cursor-pointer text-white p-2 rounded-full focus:outline-none transition-transform hover:scale-110"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <AiOutlineLeft size={24} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="relative w-full focus:outline-none">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-[30vh] md:h-[55vh] lg:h-[83vh] focus:outline-none"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-md lg:rounded-lg pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
