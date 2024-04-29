import React from 'react';
import Slider from './Slider';
import Header from './Header';
import TouristSpots from './TouristSpots';
import CounriesTour from './CounriesTour';
import CardSection from './CardSection';
import Reviews from './Reviews';
import Faq from './Faq';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CardSection></CardSection>
            <TouristSpots></TouristSpots>
            <Slider></Slider>
            <CounriesTour></CounriesTour>
            <Reviews></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;