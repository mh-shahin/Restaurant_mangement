import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import featured from '../../assets/home/featured.jpg';
import './ItemFeatured.css';

const ItemFeatured = () => {
    return (
        <div className='feature-img bg-fixed mb-10 pt-3 pb-5 bg-slate-500 text-white opacity-80'>
            <SectionTitle
                subheading='Check it out' heading='Featured Item'
            ></SectionTitle>
            <div className='flex justify-center items-center px-16 py-12 space-x-4'>
                <div>
                    <img className='max-w-sm' src={featured} alt="" />
                </div>
                <div className='space-y-2'>
                    <h2 className='text-xl'>January 20, 2024</h2>
                    <h1 className='text-2xl font-semibold'>Order Now</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt aliquam commodi, numquam, eligendi ea iste unde deserunt rerum quibusdam quisquam, tempore omnis odio pariatur inventore fugit. Incidunt debitis facere nulla, fugit enim et error mollitia vitae dolores repudiandae ab. Veritatis iure ab illum eius vitae culpa laboriosam dolorem sunt.</p>
                    <button className="btn btn-outline border-b-4 text-white rounded-md">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default ItemFeatured;