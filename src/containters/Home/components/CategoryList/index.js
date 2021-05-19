import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';

export const CategoryList = (props) => {

    const { categoryListData } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <>
            <div className="CategoryList">
                <div className="content-container slider-container">
                    <div className="">
                        <Slider {...settings}>
                            {categoryListData.map((card, index) =>
                                <div
                                    className={`card  ${index === 1 || 4 || 7 ? 'mid-card' : ''}`}
                                    key={card.id}>
                                    <div className="content">
                                        <h3 className="title">
                                            {card.title}
                                        </h3>
                                        <p className="desc">
                                            {card.description}
                                        </p>
                                        <div className="mainBtn">
                                            <Link
                                                to={card.action_link} >
                                                Shop Now
                                        </Link>
                                        </div>
                                    </div>
                                    <div className="img">
                                        <img
                                            src={card.image}
                                            alt={card.alt_value}
                                        />
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
};

CategoryList.propTypes = {
    categoryListData: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        action_link: PropTypes.string,
        image: PropTypes.string,
        alt_value: PropTypes.string,
    })
};

export default CategoryList;