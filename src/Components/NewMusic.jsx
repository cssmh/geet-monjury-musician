const NewMusic = () => {
  return (
    <div className="my-6 lg:my-10">
      <div className="text-white text-center space-y-3">
        <h1 className="text-3xl lg:text-5xl font-semibold text-red-500">
          New Music Release!
        </h1>
        <p className="lg:w-2/3 mx-4 text-base lg:mx-auto text-gray-300">
          Discover the latest track of the season! Dive into the rhythms, beats,
          and melodies that will get you hooked. Stay tuned for more updates and
          releases!
        </p>
        <button className="bg-red-500 text-white py-3 px-8 rounded-lg hover:bg-red-600 transition-all duration-300">
          Listen Now
        </button>
      </div>
      <div className="flex justify-center items-center my-12">
        <div className="w-full lg:w-2/3 mx-2 lg:mx-auto">
          <iframe
            width="100%"
            height="auto"
            className="w-full h-[315px] sm:h-[400px] lg:h-[500px]"
            src="https://www.youtube.com/embed/Wrh74F4zWpc?si=YNRzmbPrJybfA8NH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default NewMusic;
