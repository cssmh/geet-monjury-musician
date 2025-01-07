const UpcomingEvents = () => {
  const events = [
    { name: "Live Concert", date: "15th Jan 2025", location: "New York" },
    { name: "Music Festival", date: "20th Feb 2025", location: "Los Angeles" },
    { name: "Album Release", date: "5th Mar 2025", location: "Online" },
  ];

  return (
    <div className="bg-gray-900 text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg p-6 w-80 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
            <p className="text-gray-400">{event.date}</p>
            <p className="text-gray-400">{event.location}</p>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
              Buy Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
