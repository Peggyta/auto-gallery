import React from 'react';
import { useRouter } from 'next/router';
import carsInfo from '../../../data/carsInfo';
import CarDetails from '../../../components/templates/CarDetails';

const carDetail = () => {
    const router = useRouter();
    const {carId} = router.query;
    const carIndex = carsInfo[carId-1];
    return (
        <div>
            <CarDetails />
        </div>
    );
};

export default carDetail;