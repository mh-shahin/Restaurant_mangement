import React from 'react';

const SectionTitle = ({ subheading, heading }) => {
    return (
        <div className='mx-auto md:w-4/12 text-center space-y-4 m-10'>
            <p className='text-yellow-600'>---- {subheading} ----</p>
            <p className='border-y-2'></p>
            <p className='text-4xl font-semibold uppercase'>{heading}</p>
            <p className='border-y-2'></p>
        </div>
    );
};

export default SectionTitle;