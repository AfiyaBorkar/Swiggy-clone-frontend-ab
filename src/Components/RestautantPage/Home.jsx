import React from 'react';
import Navigator from './Navigator';
import HomeDummy from './HomeDummy';
import AllRestaurants from './AllRestaurants';
import Footer from '../Landing/Footer';

function Home() {
    return (
        <div>
            <Navigator />
            <HomeDummy />
            <AllRestaurants />
            <Footer />
        </div>
    );
}

export default Home;
