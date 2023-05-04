import React from 'react';
import Link from 'next/link';
import Location from '../icons/Location';

const Card = (props) => {
    const {id, name, model, year, distance, location, image, price} = props;
    return (
        <Link href={`/cars/${id}`}>
            <div className='border border-stone-800 shadow-xl rounded-xl max-w-7xl lg:w-full md:w-full sm:w-11/12 
                mx-auto my-4 px-3 bg-gray-800 py-3'>
                <img className='w-56 h-40 md:w-48 md:h-32' src={image} alt='car pictures' />
                <h4 className='font-bold text-teal-400 mt-2'>{`${name} ${model}`}</h4>
                <p className='text-sm'>{`${year} . ${distance}km`}</p>
                
                <div className='flex justify-between mt-3'>
                    <div>
                        <p className='font-semibold text-teal-400'>$ {price}</p>
                    </div>
                    <div className='flex'>
                        <p className='text-sm text-violet-400'>{location}</p>
                        <Location />
                    </div>    
                </div>
            </div> 
        </Link>
    );
};

export default Card;