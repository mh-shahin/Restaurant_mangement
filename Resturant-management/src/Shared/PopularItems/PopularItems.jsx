import React from 'react';

const PopularItems = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div className='flex space-x-4 mb-5'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
            <div>
                <h2 className='text-2xl font-semibold uppercase'>{name} --------</h2>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default PopularItems;