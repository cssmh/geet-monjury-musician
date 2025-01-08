import { Link } from "react-router-dom";
import { FaMusic } from "react-icons/fa";

const Error = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="text-center">
        <div className="text-6xl md:text-8xl font-extrabold text-red-500 mb-4">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-400 mb-6">
          The page you&apos;re looking for might have been removed or is
          temporarily unavailable.
        </p>
        <div className="flex items-center justify-center mb-6">
          <FaMusic className="text-6xl text-blue-500 animate-spin" />
        </div>
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
