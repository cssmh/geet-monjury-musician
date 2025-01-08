import book from "../assets/book.jpg";
import book1 from "../assets/book1.jpg";

const Monjory = () => {
  return (
    <div className="bg-black text-white py-12 px-4">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold">Geet Monjory</h1>
        <p className="mt-4 text-gray-300 text-lg">
          The visionary behind this platform, blending passion, music, and words
          into timeless creations.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section - Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Meet Geet Monjory</h2>
          <p className="text-gray-300 leading-relaxed">
            Geet Monjory, a celebrated author and music enthusiast, has
            redefined storytelling through books and melodies. With years of
            experience in crafting heart-touching stories and soul-stirring
            tunes, Geet Monjory has created a space where words and music come
            together to inspire generations.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            This platform is a tribute to creativity, where you can explore Geet
            Monjory’s works and join a vibrant community of music lovers and
            readers.
          </p>
        </div>

        {/* Right Section - Images */}
        <div className="flex flex-col gap-6">
          <div className="relative group">
            <img
              src={book}
              alt="Book Cover 1"
              className="rounded-lg h-96 w-2/3 md:h-full md:w-1/2 mx-auto shadow-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative group">
            <img
              src={book1}
              alt="Book Cover 2"
              className="rounded-lg h-96 w-2/3 md:h-full md:w-1/2 mx-auto shadow-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Explore the Works of Geet Monjory
        </h3>
        <p className="text-gray-300">
          Dive into a world of captivating stories and enchanting melodies.
          Discover what makes Geet Monjory a legend in the realm of music and
          literature.
        </p>
      </div>
    </div>
  );
};

export default Monjory;
