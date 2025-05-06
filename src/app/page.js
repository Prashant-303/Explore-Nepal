'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Ensure proper import
import Loader from '@/components/Loader';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home'); // Navigate to "/home" after the component mounts
  }, [router]);

  return (
    <div>
    <Loader/>
    </div>
  );
};

export default Page;
