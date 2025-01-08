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
  return (
    <div className="max-w-7xl mx-auto mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img1} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img2} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img3} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img4} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img5} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img6} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img7} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img8} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img9} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img10} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img11} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img12} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
