'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useThemeContext } from '../context/theme';
import Header from '../components/Header';

interface DogApiResponse {
  message: string;
  status: string;
}

const Dog = () => {
  const { background } = useThemeContext();
  const [datas, setDatas] = useState<DogApiResponse | null>(null); // Specify the type explicitly
  const [load, setLoad] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchArticles = async () => {
      try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const data: DogApiResponse = await res.json()

        if (isMounted) {
          setDatas(data);
          setLoad(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        if (isMounted) {
          setLoad(false);
        }
      }
    };
    fetchArticles();

    // Cleanup function to handle component unmounting
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Header />
      <br />
      {load ? (
        <div>Loading...</div>
      ) : (
        datas ? (
          <div>
          <Image
            src={datas.message}
            width={900}
            height={675}
            style={{ maxWidth: '100%' }}
            alt="Dog not found"
          />
          </div>
        ) : (
          <div>No data available</div>
        )
      )}
      <div
        style={{
          background: background,
          width: '500px',
          height: '500px',
        }}
      >
        {}
      </div>
    </>
  );
};

export default Dog;