const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-white">
      <div className="text-center mb-7 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          About Geet Monjory
        </h2>
        <p className="text-lg mt-4 text-gray-300">
          A journey of soulful music and heartfelt melodies.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-400 leading-relaxed">
            Geet Monjory is a platform where music transcends boundaries. With a
            rich collection of original compositions and collaborations, we aim
            to connect with music enthusiasts worldwide. Our songs are crafted
            to evoke emotions, tell stories, and create unforgettable memories.
          </p>
        </div>
        {/* Right Content */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-400 leading-relaxed">
            To empower artists and listeners by creating a space where
            creativity and passion converge. At Geet Monjory, we strive to make
            music accessible, enjoyable, and inspiring for all.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Join the Melody</h3>
        <p className="text-gray-400 leading-relaxed">
          Whether you&apos;re a musician looking to share your work or a fan
          seeking musical inspiration, Geet Monjory welcomes you to a vibrant
          community. Let&apos;s create magic together through the universal
          language of music.
        </p>
        <div className="mt-6">
          <a
            href="https://www.youtube.com/@geetmonjory8955"
            className="px-6 py-2 text-white  bg-red-500 hover:bg-red-600 font-medium rounded-lg transition"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
