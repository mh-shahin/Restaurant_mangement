import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Intro from './Intro/Intro';
import PopularMenu from './PopularMenu/PopularMenu';
import ItemFeatured from './ItemFeatured/ItemFeatured';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='max-w-6xl mx-auto'>
                <Category></Category>
                <Intro></Intro>
                <PopularMenu></PopularMenu>
                <ItemFeatured></ItemFeatured>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;