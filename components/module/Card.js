import React from 'react';
import Link from 'next/link';
import Location from '../icons/Location';

const Card = (props) => {
    const {id, name, model, year, distance, location, image, price} = props;
    return (
        <Link href={`/cars/${id}`}>
            <div className='flex flex-col max-w-7xl'>
                <img className='w-56' src={image} alt='car pictures' />
                <h4>{`${name} ${model}`}</h4>
                <p>{`${year} . ${distance}km`}</p>
                
            <div className='flex gap-4'>
                <div>
                    <p>$ {price}</p>
                </div>
                <div className='flex'>
                    <p>{location}</p>
                    <Location />
                </div>    
                </div>
            </div> 
        </Link>
    );
};

export default Card;