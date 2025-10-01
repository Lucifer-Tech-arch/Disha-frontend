import React from 'react';
import CollegeFinder from '../Components/CollegeFinder';
import CollegeCard from '../Components/CollegeCard';

const Colleges = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <main className='pt-24 pb-12'>
        <CollegeFinder />
        <CollegeCard />
      </main>
    </div>
  );
};

export default Colleges;
