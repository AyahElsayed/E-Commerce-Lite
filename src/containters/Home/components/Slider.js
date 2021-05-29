import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
// import { NextArrow, PrevArrow } from '../../../../components/helpers/ArrowsSlider';
// import {
//     Title,
//     Description,
//     Action_link,
//     Imag,
//     Alt_value
//   } from "reactstrap";

export const SliderComponent = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: props.noOfShow,
        slidesToScroll: props.noOfScroll,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />
    };

    const { categoryListData } = props;

    // const data = {
    //     // props.categoryListData,
    // }

    // const KeysToComponentMap = {
    //     title: Title,
    //     description: Description,
    //     action_link: Action_link,
    //     image: Imag,
    //     alt_value: Alt_value
    //   };

    //   const renderItem = config => {
    //     if (typeof KeysToComponentMap[config.component] !== "undefined") {
    //       // 
    //     }
    //   };

    return (
        <div>
            <Slider {...settings}>
                {props.categoryListData ?
                    categoryListData.map((card, index) =>
                        <div
                            className={`home_category_card  ${(index - 1) % 3 === 0 ? 'home_category_mid_card' : ''}`}
                            key={card.id}>
                            <div className="home_category_content">
                                <h3 className="home_category_title">
                                    {card.title}
                                </h3>
                                <p className="home_category_desc">
                                    {card.description}
                                </p>
                                <div className="home_category_mainBtn">
                                    <Link
                                        to={card.action_link} >
                                        Shop Now
                                        </Link>
                                </div>
                            </div>
                            <div className="home_category_img">
                                <img
                                    src={card.image}
                                    alt={card.alt_value}
                                />
                            </div>
                        </div>
                    )
                    :
                    ""
                }
            </Slider>
        </div>
    )
};

