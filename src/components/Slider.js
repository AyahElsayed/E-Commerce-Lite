import React from 'react';
import ReactSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './helpers/ArrowsSlider';

export const Slider = (props) => {

    const defaultSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    let finalSettings = { ...defaultSettings };
    const { settings, renderItem, data } = props;

    if (settings !== undefined) {
        finalSettings = { ...finalSettings, ...settings }
    };

    return (
        <div>
            <ReactSlider {...finalSettings}>
                {data ?
                    data.map((item, index) => {
                        return renderItem(item, index)
                    })
                    :
                    ""
                }
            </ReactSlider>
        </div>
    )
};

