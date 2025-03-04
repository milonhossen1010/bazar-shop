import { FaSpinner } from 'react-icons/fa';
import React from 'react';

type LoadingProps = {
  size?: number;
};

const Loading: React.FC<LoadingProps> = ({ size = 24 }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <FaSpinner className="animate-spin text-skyText" size={size} />
      <p className='text-center mt-4'>Loadin....</p>
    </div>
  );
};

export default Loading;
