import React from 'react';
import Image from 'next/image';
import neoncar from '../../public/assets/neoncar.jpg';

const Banner = () => {
    return (
        <>
            <Image
                src={neoncar}
                alt='mclaren background picture'
                layout='responsive'
            />
            <h2 className='text-xl md:text-4xl lg:text-6xl text-center text-violet-50 font-bold
              lg:-mt-32 md:-mt-20 drop-shadow-md'>
                <span className='lg:text-7xl text-xl md:text-6xl md:bg-teal-300 
                md:px-2 md:text-purple-950 rounded-tl-2xl rounded-br-3xl'>S</span>imply find your car with confidence
            </h2> 
        </> 
    );
};

export default Banner;