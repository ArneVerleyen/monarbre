import { default as React } from 'react';
import {} from '../components';

const PageLayout = ({childern}) => {
    return (
        <div className="page">
            header
            <main className="page_main">
                {childern}
            </main>
            footer
        </div>
    );
};

export default PageLayout;