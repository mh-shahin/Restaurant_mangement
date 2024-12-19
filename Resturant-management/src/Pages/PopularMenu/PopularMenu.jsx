import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import PopularItems from '../../Shared/PopularItems/PopularItems';
import useMenu from '../../Hoocks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div>
            <section>
                <SectionTitle subheading='Check it out' heading='From our menu'
                ></SectionTitle>
            </section>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item => <PopularItems key={item._id} item={item}></PopularItems>)
                }
            </div>
            <div className='flex justify-center mt-5 mb-8'>
                <button className="btn btn-outline border-b-4 text-white rounded-md">View More</button>
            </div>
        </div>
    );
};

export default PopularMenu;