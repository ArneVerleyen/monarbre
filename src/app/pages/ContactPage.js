import { default as React } from 'react';
import { Header, Footer, ContactForm } from '../components';

const ContactPage = () => {
    return (
        <div>
            <Header/>
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default ContactPage;