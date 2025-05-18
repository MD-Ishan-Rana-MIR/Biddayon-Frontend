import React from 'react';
import ContactInformation from './ContactInformation';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 sm:gap-16 gap-10 md:gap-20 md:px-5 px-3'>
            <ContactInformation></ContactInformation>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;