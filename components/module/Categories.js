import React from 'react';
import Link from 'next/link';
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Sport from "../icons/Sport";
import Hatchback from "../icons/Hatchback";

const Categories = () => {
    return (
        <div className='max-w-2xl mx-auto mt-12'>
            <div className='mb-3'>
                <h3 className='text-center font-semibold text-2xl text-indigo-400'>All body types</h3>
            </div>
            <div className='flex justify-center gap-10'>
                <Link href='/categories/sedan'>
                    <div className='car-category'>
                        <Sedan />
                        <p>Sedan</p>
                    </div>
                </Link>
                <Link href='/categories/suv'>
                    <div className='car-category'>
                        <Suv />
                        <p>SUV</p>
                    </div>
                </Link>
                <Link href='/categories/hatchback'>
                    <div className='car-category'>
                        <Hatchback />
                        <p>Hatchback</p>
                    </div>
                </Link>
                <Link href='/categories/sport'>
                    <div className='car-category'>
                        <Sport />
                        <p>Sport</p>
                    </div>
                </Link>
            </div>   
        </div>
    );
};

export default Categories;