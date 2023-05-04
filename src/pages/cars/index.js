import React from 'react';
import carsInfo from '../../../data/carsInfo';
import CarsPage from '../../../components/templates/CarsPage';

const carInfo = () => {
    return (
        <div>
            <CarsPage data={carsInfo} />
        </div>
    );
};

export default carInfo;