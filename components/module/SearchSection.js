import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchSection = () => {
    const router = useRouter();
    const[min, setMin] = useState("");
    const[max, setMax] = useState("");

    const searchHandler = () => {
        if(min && max) {
            return router.push(`/filter/${min}/${max}`)
        } else {
            return alert('Please enter valid number!')
        }
        
    };

    return (
        <div className='flex justify-center items-center gap-3 mt-16'>
            <div className='flex flex-col gap-2'>
                <input value={min} type='text' onChange={(e)=> setMin(e.target.value)} 
                placeholder='enter min price' className='text-sm py-1 pl-2 rounded-lg' />
                <input value={max} type='text' onChange={(e)=> setMax(e.target.value)} 
                placeholder='enter max price' className='text-sm py-1 pl-2 rounded-lg' />
            </div>
            <div>
                <button  className='bg-teal-900 rounded-xl hover:bg-teal-800 transition py-5 px-2' onClick={searchHandler}>Search</button>
            </div>
        </div>
    );
};

export default SearchSection;