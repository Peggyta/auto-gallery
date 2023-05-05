import React from 'react';
import { useRouter } from 'next/router';
import carsInfo from '../../../data/carsInfo';
import CarCategory from '../../../components/templates/CarCategory';

const categoryDetails = () => {
    const router = useRouter();
    const {category} = router.query;
    console.log(category);
    const getCategory = carsInfo.filter((item)=> item.category === category);
    return (
        <div>
            <CarCategory data={getCategory} />
        </div>
    );
};

export default categoryDetails;