import { default as React } from 'react';
import {} from '../components';

const HomePageLayout = ({childern}) => {
    return (
        <div className="page">
            home header
            <main className="page_main">
                {childern}
            </main>
            footer
        </div>
    );
};

export default HomePageLayout;