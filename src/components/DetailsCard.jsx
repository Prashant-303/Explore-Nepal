'use client'
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const DetailsCard = ({ destination }) => {
  const router = useRouter();
  const { id, name, region, type, rating, description, image } = destination;

  return (
    <div
      onClick={() => router.push(`/destination/${id}`)}
      className="w-96 bg-white rounded-lg shadow-lg p-4 cursor-pointer"
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
      <div className='flex justify-between items-center'>
     <div>
     <h2 className="text-lg font-medium text-gra''y-800">{name}</h2>
      <p className="text-sm text-gray-500"> {region} . {type}</p>
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
  );
};



export default DetailsCard;
