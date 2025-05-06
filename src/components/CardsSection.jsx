import React from 'react'
import DetailsCard from './DetailsCard'
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
const CardsSection = () => {
    return (
        <>
        <h1 className="text-4xl font-bold text-green-600 text-center my-4">Popular Destination</h1>
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {destinations.map((destination) => (
          <DetailsCard key={destination.id} destination={destination} />
        ))}
      </div>
      </>
    );
  };

export default CardsSection
