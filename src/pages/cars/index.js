import React from 'react';
import carsInfo from '../../../data/carsInfo';
import CarsPage from '../../../components/templates/CarsPage';
import Categories from '../../../components/module/Categories';

const carInfo = () => {
    return (
        <div>
            <Categories />
            <CarsPage data={carsInfo} />
        </div>
    );
};

export default carInfo;