import Image from "next/image";
import Attractions from "./Attractions";

const data = {
  main: {
    title: "BREATH TAKING NEPAL",
    description: "Nepal, a land of unparalleled natural beauty, is nestled in the lap of the Himalayas. Known for its majestic peaks, serene lakes, and vibrant culture, it is a haven for adventure seekers and peace lovers alike. The country's unique blend of spirituality and tradition makes it a treasure trove of experiences.",
    image: "https://images.pexels.com/photos/20839113/pexels-photo-20839113/free-photo-of-snow-covered-peaks-of-the-himalayas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  panels: [
    {
      title: "Rich Culture",
      description: "Nepal's culture is a tapestry woven with diverse traditions, languages, and festivals. From the vibrant celebrations of Dashain and Tihar to the solemn chants in monasteries, every moment is a cultural immersion.",
      image: "https://images.pexels.com/photos/2410391/pexels-photo-2410391.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Natural Wonders",
      description: "Nepal is home to some of the most stunning landscapes on Earth. From the towering peaks of the Himalayas to lush valleys and serene lakes, every corner of Nepal tells a story of nature's grandeur.",
      image: "https://images.pexels.com/photos/3926131/pexels-photo-3926131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ],
  attractions: [
    "Everest Base Camp",
    "Phewa Lake",
    "Chitwan National Park",
    "Lumbini - Birthplace of Buddha",
    "Annapurna Circuit",
    "Bhaktapur Durbar Square",
    "Pokhara Valley"
  ]
};

export default function Description() {
  return (
    <div className="bg-blue-50 min-h-screen p-4">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Main Section */}
        <div className="col-span-2 bg-white p-6 rounded-3xl shadow-lg relative">
          <h1 className="text-4xl font-bold text-blue-300 mb-4">
            {data.main.title}
          </h1>
          <p className="text-gray-600 mb-6 text-justify">
            {data.main.description}
          </p>
          <Image
            src={data.main.image}
            alt="Himalayas"
            className="rounded-lg"
            width={800}
            height={500}
          />
        </div>

        {/* Panels Section */}
        <div className="flex flex-col gap-6">
          {data.panels.map((panel, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center"
            >
              <Image
                src={panel.image}
                alt={panel.title}
                className="rounded-lg mb-4"
                width={400}
                height={250}
              />
              <h2 className="text-2xl font-bold mb-2">{panel.title}</h2>
              <p className="text-gray-600">{panel.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Attractions Section */}
<Attractions/>
    </div>
  );
}
