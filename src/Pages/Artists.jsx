import geet from "../assets/monjory.jpg";
import geet2 from "../assets/artist.jpg";
import geet3 from "../assets/artist2.jpg";

const Artists = () => {
  const artists = [
    { name: "Geet Monjory", genre: "Singer", image: geet },
    { name: "Group", genre: "Rock", image: geet2 },
    { name: "Group Music", genre: "Instruments", image: geet3 },
  ];

  return (
    <div className="max-w-7xl mx-auto text-white my-4 lg:my-6">
      <h2 className="text-3xl font-bold text-center mb-2">Artists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg p-4 text-center"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-52 lg:h-64 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">{artist.name}</h3>
            <p className="text-gray-600">{artist.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
