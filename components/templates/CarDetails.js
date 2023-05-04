import React from 'react';
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import Calender from "../icons/Calender";

const CarDetails = (props) => {
    const{name, model, year, distance, description, location, price, image}= props;
    return (
        <div className='max-w-sm lg:max-w-5xl md:max-w-2xl sm:max-w-md px-4 mx-auto flex flex-col'>
            <img className='rounded-xl' src={image} alt='picture of each car' />
            <h3 className='font-bold text-indigo-400 text-2xl my-3'>
                {name} {model}
            </h3>
        <div className='bg-gray-800 px-4 border border-indigo-900 shadow-xl py-4 rounded-xl'>
          <div className='car-details'>
            <div className='flex gap-2'>
                <Company />
                <p className='pt-1 text-indigo-400'>Company</p>
            </div>
            <span>{name}</span>
          </div>
          <div className='car-details'>
            <div className='flex gap-2'>
                <Model />
                <p className='text-indigo-400'>Model</p>
            </div>
            <span>{model}</span>
          </div>
          <div className='car-details'>
            <div className='flex gap-2'>
                <Calender />
                <p className='text-indigo-400'>First registration</p>
            </div> 
            <span>{year}</span>
          </div>
          <div className='car-details'>
            <div className='flex gap-2'>
                <Road />
                <p className='text-indigo-400'>kms driven</p>
            </div> 
            <span>{distance}</span>
          </div>
        </div>
        <div className='bg-gray-800 px-4 border mt-6 border-indigo-900 shadow-xl pb-3 pt-6 rounded-xl'>
          <div className='car-details'>
            <div className='flex gap-2'>
                <Location />
                <p>Location</p>
            </div> 
            <span>{location}</span>
          </div>
        </div>
        <div className='bg-gray-800 px-4 border mt-6 border-indigo-900 shadow-xl pt-4 pb-6 rounded-xl'>
          <p className='font-bold text-indigo-400 text-lg my-3'>Extra Information</p>
          <p>{description}</p>
        </div>
        <div className='bg-gray-800 px-4 border mt-6 border-indigo-900 shadow-xl pt-6 pb-3 rounded-xl'>
          <div className='car-details'>
            <div className='flex gap-2'>
                <Money />
                <p>Price:</p>
            </div>
            <span>{price}</span>
          </div>
        </div>
        <button className='bg-purple-600 mt-10 py-3 text-xl font-bold 
        text-purple-200 hover:bg-purple-800 transition delay-75 rounded-lg'>Buy</button>
      </div>
    );
};

export default CarDetails;