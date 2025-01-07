import geet from "../assets/monjory.jpg";
import geet2 from "../assets/artist.jpg";
import geet3 from "../assets/artist2.jpg";

const Artists = () => {
  const artists = [
    { name: "Geet Monjory", genre: "Singer", image: geet },
    { name: "Group", genre: "Rock", image: geet2 },
    { name: "Group", genre: "Instruments", image: geet3 },
  ];

  return (
    <div className="text-white my-6">
      <h2 className="text-3xl font-bold text-center mb-6">Artists</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg p-4 text-center"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-64 object-cover rounded-t-lg"
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
