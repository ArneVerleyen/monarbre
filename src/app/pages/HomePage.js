import { default as React } from 'react';
import { HomeContent, HomeHeader, Footer } from '../components';

const HomePage = () => {
    return (
        <div>
            <HomeHeader/>
            <HomeContent/>
            <Footer/>
        </div>
    );
};

export default HomePage;