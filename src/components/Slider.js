import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './helpers/ArrowsSlider';

export const SliderComponent = (props) => {

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
    const { categoryListData, settings, renderItem, discountListData } = props;

    if (settings !== undefined) {
        finalSettings = { ...finalSettings, ...settings }
    }

    return (
        <div>
            <Slider {...finalSettings}>
                {props.categoryListData ?
                    categoryListData.map((item, index) => {
                        return renderItem(item, index)
                    })
                    :
                    ""
                }
                {props.discountListData ?
                    discountListData.map((item) => {
                        return renderItem(item)
                    })
                    :
                    ""
                }
            </Slider>
        </div>
    )
};

