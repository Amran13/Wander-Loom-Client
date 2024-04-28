import React from 'react';
import Slider from './Slider';
import Header from './Header';
import TouristSpots from './TouristSpots';
import CounriesTour from './CounriesTour';

const Home = () => {
    return (
        <div>
            <h2 className='text-center font-bold text-3xl'>Home Page</h2>
            {/* <Header></Header>
            <Slider></Slider>
            <TouristSpots></TouristSpots> */}
            <TouristSpots></TouristSpots> 
            <CounriesTour></CounriesTour>

        </div>
    );
};

export default Home;