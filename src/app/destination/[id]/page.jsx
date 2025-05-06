import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const destinations = [
  {
    id: 1,
    name: 'Kathmandu',
    region: 'Bagmati Province',
    type: 'Cultural',
    rating: 4.5,
    popularity: 120,
    description:
      'The capital city of Nepal, known for its rich history, temples, and cultural heritage. Kathmandu is home to UNESCO World Heritage sites, such as Pashupatinath Temple, Boudhanath Stupa, and Swayambhunath (Monkey Temple). Visitors can explore its vibrant streets, indulge in authentic Nepali cuisine, and experience the harmony of modern and traditional cultures.',
    image: 'https://images.pexels.com/photos/2177708/pexels-photo-2177708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'Annapurna',
    region: 'Gandaki Province',
    type: 'Trekking',
    rating: 4.8,
    popularity: 200,
    description:
      'A popular trekking destination in Nepal, offering stunning views of the Himalayas. Annapurna is known for its breathtaking trekking routes, including the Annapurna Circuit and Annapurna Base Camp.',
    image: 'https://images.pexels.com/photos/4235503/pexels-photo-4235503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: 'Pokhara',
    region: 'Gandaki Province',
    type: 'Adventure',
    rating: 4.7,
    popularity: 150,
    description:
      'A beautiful city known for its lakes, adventure sports, and proximity to the Annapurna range. Pokhara offers activities like paragliding, boating, and trekking.',
    image: 'https://images.pexels.com/photos/1588134/pexels-photo-1588134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    name: 'Chitwan',
    region: 'Narayani Province',
    type: 'Wildlife',
    rating: 4.6,
    popularity: 180,
    description:
      'Famous for Chitwan National Park and its wildlife, including tigers, rhinos, and elephants. Visitors can enjoy jungle safaris, bird watching, and canoeing.',
    image: 'https://images.pexels.com/photos/5915794/pexels-photo-5915794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const Page = ({ params }) => {
  const { id } = params;

  // Find the destination matching the ID
  const destination = destinations.find((dest) => dest.id === parseInt(id));

  // Handle the case where the destination is not found
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Destination not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-96">
        <Image
          src={destination.image}
          alt={destination.name}
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold shadow-lg bg-opacity-50 bg-black px-4 py-2 rounded-md">
            {destination.name}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4">About {destination.name}</h2>
            <p className="text-gray-700 leading-7 mb-6">{destination.description}</p>

            <h3 className="text-xl font-semibold mb-2">Why Visit?</h3>
            <p className="text-gray-700 leading-7 mb-6">
              Discover the unique attractions and experiences that {destination.name} has to offer. Explore its history,
              culture, and natural beauty, making it a must-visit destination.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold mb-4">Quick Info</h3>
            <div className="mb-4">
              <p className="text-gray-500 font-medium">Region</p>
              <p className="text-gray-800">{destination.region}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 font-medium">Type</p>
              <p className="text-gray-800">{destination.type}</p>
            </div>
            <div className="mb-4 flex items-center">
              <p className="text-gray-500 font-medium mr-2">Rating</p>
              <div className="flex items-center">
                <div className="flex text-yellow-500 mr-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={index < Math.round(destination.rating) ? 'text-yellow-500' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">({destination.rating.toFixed(1)} / 5)</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white rounded-lg py-2 mt-4 hover:bg-blue-700 transition">
              Plan Your Visit
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Page;
