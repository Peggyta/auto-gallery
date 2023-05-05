import React from 'react';
import Card from '../module/Card';

const CarsPage = ({data}) => {
    return (
        <div className='max-w-7xl gap-5 grid col-auto lg:mx-12 md:mx-6 place-items-center grid-col-1 mt-32 lg:grid-cols-4 
        md:grid-cols-3 sm:grid-cols-2 sm:mx-16'>
            {data.map((car)=>
            <Card key={car.id} {...car} />)}
        </div>
    );
};

export default CarsPage;