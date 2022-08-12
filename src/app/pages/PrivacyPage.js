import { default as React } from 'react';
import { Header, Footer, PrivacyPolicy } from '../components';

const PrivacyPage = () => {
    return (
        <div>
            <Header/>
                <PrivacyPolicy/>
            <Footer/>
        </div>
    );
};

export default PrivacyPage;