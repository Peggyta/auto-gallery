import React from 'react';
import Card from '../module/Card';
import { useRouter } from 'next/router';
import Back from '../icons/Back';

const CarCategory = ({data}) => {
    const router = useRouter();
    const backHandler = () => {
        router.back()
    };

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex bg-gray-700 w-20 ml-16 mt-12 cursor-pointer 
            rounded-lg gap-2 py-2 pl-2 hover:bg-gray-600 transition' onClick={backHandler}>
                <Back />
                <p>Back</p>
            </div>
            <div className='grid col-auto lg:mx-12 md:mx-6 place-items-center grid-col-1 mt-32 lg:grid-cols-4 
                md:grid-cols-3 sm:grid-cols-2 sm:mx-16'>
                {data.map((item)=>
                <Card key={item.id} {...item} />)}
            </div>
        </div>
    );
};

export default CarCategory;