import React from 'react';
import './index.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoMdAperture } from 'react-icons/io';
import { TiFlash } from 'react-icons/ti';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { NextArrow, PrevArrow } from '../../../../components/helpers/ArrowsSlider';

export const DiscountsList = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div
                style={{
                    bottom: "-40px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    };

    const { discountListData } = props;

    return (
        <div className="dscounts_list">
            <div className="content-container slider_container ">
                <div className="discounts_list_header">
                    <h3 className="header_title">
                        Recent Discounts
                    </h3>
                    <div className="all_products">
                        <Link
                            to="/DiscountsList/allProducts" >
                            View All Products
                        </Link>
                    </div>
                </div>

                <div className="discounts_list_body slider_container">
                    <Slider {...settings}>
                        {discountListData.map((card) =>
                            <div className="discounts_list_card">
                                <div className="discount_amount">
                                    <IconContext.Provider value={{ color: "white", className: "discount_amount_icon" }}>
                                        <div>
                                            <IoMdAperture />
                                        </div>
                                    </IconContext.Provider>
                                    save ${card.discount_amount}
                                </div>
                                <div className="discounts_list_card_content">
                                    {card.flash_deal === "true" ?
                                        <div className="flash_deal_wrapper">
                                            <div className="flash_deal">
                                                <IconContext.Provider value={{ color: "white", className: "discount_amount_icon" }}>
                                                    <div>
                                                        <TiFlash />
                                                    </div>
                                                </IconContext.Provider>
                                                FLASH DEAL
                                            </div>
                                        </div>
                                        : ""
                                    }
                                    <div className="discount_product_image">
                                        <img src={card.image} alt="" />
                                    </div>
                                    <div className="discount_product_brand">
                                        {card.brand}
                                    </div>
                                    <div className="body_title">
                                        {card.title}
                                    </div>
                                    <div className="discount_product_rate">
                                        {/* ***** */}
                                        <Rate
                                            value={4}
                                            allowHalf="true"
                                            disabled="true"
                                        />
                                        <span className="rate_count rate_percentage">{card.rate}</span>
                                        <span className="rate_count">{card.rate_count}</span>
                                    </div>
                                    <div className="discount_product_price">
                                        ${card.price} <span className="discount_price">${card.discount_price}</span>
                                    </div>
                                    <div className="stock_count">
                                        {card.stock_count > "1" ?
                                            <div className={`progress_bar ${card.stock_count > 9 ? "greenstock" : "orangeStock"}`}>
                                                <div className="bar">
                                                    <Line
                                                        percent={card.stock_count > 20 ? "80" : "40"}
                                                        strokeWidth="10"
                                                        strokeColor={card.stock_count > 9 ? "#088a3c" : "#ffbc00"}
                                                        trailWidth="9"
                                                    />
                                                </div>
                                                <div className="bar_desc">{card.stock_count} Available in stock</div>
                                            </div>
                                            :
                                            <div className="progress_bar" style={{ color: "hotpink" }}>
                                                <div className="bar">
                                                    <Line
                                                        percent="10"
                                                        strokeWidth="10"
                                                        strokeColor="hotpink"
                                                        trailWidth="9"
                                                    />
                                                </div>
                                                <div className="bar_desc">last product in stock</div>
                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    )
};