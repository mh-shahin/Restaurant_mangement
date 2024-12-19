import React from 'react';
import chef from '../../assets/home/chef-service.jpg';

const Intro = () => {
    return (
        <div className="relative w-full h-64">
            {/* Background Image */}
            <img src={chef} alt="" className="w-full h-full object-cover" />

            {/* Centered Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-60 rounded-lg text-black w-3/4 h-3/4 flex flex-col items-center justify-center">
                    <h1 className="text-center text-2xl font-bold">Bistro Boss</h1>
                    <p className="text-center m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus,libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>


    );
};

export default Intro;