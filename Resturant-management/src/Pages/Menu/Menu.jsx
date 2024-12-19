import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import PopularMenu from '../PopularMenu/PopularMenu';
import Intro from '../Intro/Intro';
import PopularItems from '../../Shared/PopularItems/PopularItems';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu" text='Would you like to try a dish?'></Cover>
            
        </div>
    );
};

export default Menu;