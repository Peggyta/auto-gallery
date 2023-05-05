import React from 'react';
import carsInfo from '../../../data/carsInfo';
import CarsPage from '../../../components/templates/CarsPage';
import Categories from '../../../components/module/Categories';
import SearchSection from '../../../components/module/SearchSection';

const carInfo = () => {
    return (
        <div>
            <SearchSection />
            <Categories />
            <CarsPage data={carsInfo} />
        </div>
    );
};

export default carInfo;