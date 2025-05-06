'use client'; // Add this line at the top of the file if using the App Router

import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Update this import

const Page = () => {
  const router = useRouter(); // Works with App Router now
  const [sortOption, setSortOption] = useState('rating');

  const destinations = [
    {
      id: 1,
      name: 'Kathmandu',
      region: 'Bagmati Province',
      type: 'Cultural',
      rating: 4.5,
      description: 'The capital city of Nepal, known for its rich history, temples, and cultural heritage.',
      image: 'https://images.pexels.com/photos/2177708/pexels-photo-2177708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Annapurna',
      region: 'Gandaki Province',
      type: 'Trekking',
      rating: 4.8,
      description: 'A popular trekking destination in Nepal, offering stunning views of the Himalayas.',
      image: 'https://images.pexels.com/photos/4235503/pexels-photo-4235503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Pokhara',
      region: 'Gandaki Province',
      type: 'Adventure',
      rating: 4.7,
      description: 'A beautiful city known for its lakes, adventure sports, and proximity to the Annapurna range.',
      image: 'https://images.pexels.com/photos/1588134/pexels-photo-1588134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Chitwan',
      region: 'Narayani Province',
      type: 'Wildlife',
      rating: 4.6,
      description: 'Famous for Chitwan National Park and its wildlife, including tigers, rhinos, and elephants.',
      image: 'https://images.pexels.com/photos/5915794/pexels-photo-5915794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  // Sorting destinations based on the selected option
  const sortedDestinations = React.useMemo(() => {
    return [...destinations].sort((a, b) => {
      if (sortOption === 'rating') {
        return b.rating - a.rating;
      } else if (sortOption === 'popularity') {
        return b.popularity - a.popularity;
      }
      return 0;
    });
  }, [sortOption]);

  return (
    <div className="">
      <div className="mb-6">
      <header className="bg-green-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Destinations</h1>
          <p className="text-lg mt-2">
            Explore the history, culture, and breathtaking landscapes of Nepal
          </p>
        </div>
      </header>
        <div className="flex items-center gap-4">
          <label htmlFor="sort" className="text-lg font-medium">Sort By:</label>
          <select
            id="sort"
            className="border border-gray-300 rounded-lg p-2"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="rating">Rating</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedDestinations.map(({ id, name, region, type, rating, description, image }) => (
          <div
            key={id}
            onClick={() => router.push(`/destination/${id}`)} // Works with new App Router
            className="w-full bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition"
          >
            <div className="relative w-full h-44 mb-4">
              <Image
                src={image}
                alt={name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-medium text-gray-800">{name}</h2>
                <p className="text-sm text-gray-500">{region} &middot; {type}</p>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-500 mr-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={index < Math.round(rating) ? 'text-yellow-500' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">({rating.toFixed(1)} / 5)</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
