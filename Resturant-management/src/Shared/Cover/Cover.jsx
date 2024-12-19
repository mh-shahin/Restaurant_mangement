import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, text }) => {
    return (
        <Parallax
            blur={{ min: -100, max: 100 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div
                className="hero h-[500px]"
                style={{
                    backgroundImage: `url("${img}")`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">{title}</h1>
                        <p className="mb-5 text-white">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;