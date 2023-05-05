import React from 'react';
import { useRouter } from 'next/router';
import carsInfo from '../../../data/carsInfo';
import CarCategory from '../../../components/templates/CarCategory';

const filterPrice = () => {
    const router = useRouter();
    const [min, max] = router.query.slug || [];
    const filteredData = carsInfo.filter((item)=> 
    item.price > min && item.price < max);
    if(!filteredData.length) return <h3>Not found!</h3>
    return (
        <CarCategory data={filteredData} />
    );
};

export default filterPrice;