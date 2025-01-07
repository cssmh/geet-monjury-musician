const FeaturedArtists = () => {
  const artists = [
    { name: "Artist 1", genre: "Pop", image: "artist1.jpg" },
    { name: "Artist 2", genre: "Rock", image: "artist2.jpg" },
    { name: "Artist 3", genre: "Jazz", image: "artist3.jpg" },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Artists</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 w-64 text-center"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{artist.name}</h3>
            <p className="text-gray-600">{artist.genre}</p>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArtists;
