import bg from "../assets/explore.jpg";
const Explore = () => {
  return (
    <div
      // bg-no-repeat bg-center bg-fixed
      className="bg-cover lg:mt-14 mb-6 md:mb-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-7xl mx-auto text-white py-[70px] md:py-24">
        <h1 className="w-[96%] lg:w-[85%] mx-auto text-2xl md:text-3xl text-center">
          ‘’Exploring the infinite dimensions of sound, we sculpt sonic
          landscapes that defy conventional boundaries!’’
        </h1>
      </div>
    </div>
  );
};

export default Explore;
