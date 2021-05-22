import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export const CategoryList = (props) => {

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div className="next_arrow"
                onClick={onClick}
            >
                <IoIosArrowForward />
            </div>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="prev_arrow"
                onClick={onClick}
            >
                <IoIosArrowBack/>
            </div>
        );
    }

    const { categoryListData } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <div className="CategoryList">
                <div className="content-container slider-container">
                    <div className="">
                        <Slider {...settings}>
                            {categoryListData.map((card, index) =>
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