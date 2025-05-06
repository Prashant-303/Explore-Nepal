import { FaMountain, FaWater, FaTree, FaPagelines, FaHiking, FaLandmark, FaMapMarkerAlt } from "react-icons/fa";

const data = {
  attractions: [
    "Everest Base Camp",
    "Phewa Lake",
    "Chitwan National Park",
    "Lumbini - Birthplace of Buddha",
    "Annapurna Circuit",
    "Bhaktapur Durbar Square",
    "Pokhara Valley",
  ],
};

const getIcon = (attraction) => {
  switch (attraction) {
    case "Everest Base Camp":
      return <FaMountain className="text-green-600 mr-3" />;
    case "Phewa Lake":
      return <FaWater className="text-blue-500 mr-3" />;
    case "Chitwan National Park":
      return <FaTree className="text-green-500 mr-3" />;
    case "Lumbini - Birthplace of Buddha":
      return <FaPagelines className="text-yellow-500 mr-3" />;
    case "Annapurna Circuit":
      return <FaHiking className="text-red-500 mr-3" />;
    case "Bhaktapur Durbar Square":
      return <FaLandmark className="text-orange-500 mr-3" />;
    case "Pokhara Valley":
      return <FaMapMarkerAlt className="text-purple-500 mr-3" />;
    default:
      return null;
  }
};

const Attractions = () => {
  return (
    <div className="bg-white p-8 mt-10 rounded-3xl shadow-xl max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
        Must-Visit Attractions in Nepal
      </h2>
      <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.attractions.map((attraction, index) => (
          <li
            key={index}
            className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-xl shadow-sm transition-all"
          >
            {getIcon(attraction)}
            <span className="text-lg text-gray-700 font-medium">
              {attraction}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Attractions;
