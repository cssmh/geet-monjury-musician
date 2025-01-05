import band1 from "../assets/band.jpg";
import band2 from "../assets/bang2.jpg";
import band3 from "../assets/band3.jpg";
import band4 from "../assets/band4.jpg";
import band5 from "../assets/band5.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Banner = () => {
  const images = [band1, band2, band3, band4, band5];

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10 cursor-pointer text-white p-2 rounded-full"
      onClick={onClick}
    >
      <AiOutlineRight size={24} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10 cursor-pointer text-white p-2 rounded-full"
      onClick={onClick}
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
  };

  return (
    <div className="relative w-full h-screen">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="w-full h-[83vh]">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
