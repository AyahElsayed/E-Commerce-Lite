import React from 'react';
import './index.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowForward, IoIosArrowBack, IoMdAperture } from 'react-icons/io';
import { TiFlash } from 'react-icons/ti';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

export const DiscountsList = () => {

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
                <IoIosArrowBack />
            </div>
        );
    }

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

return (
    <div className="DiscountsList">
        <div className="content-container slider_container ">
            <div className="DiscountsList_header">
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

            <div className="DiscountsList_body slider_container">
                <Slider {...settings}>
                    {/* ///1///////// */}
                    <div className="DiscountsList_card">
                        <div className="discount_amount">
                            <IconContext.Provider value={{ color: "white", className: "discount_amount_icon" }}>
                                <div>
                                    <IoMdAperture />
                                </div>
                            </IconContext.Provider>
                                save $100
                        </div>
                        <div className="DiscountsList_card_content">
                            <div className="flash_deal">

                            </div>
                            <div className="image">
                                <img src="./assets/laptop2.JPG" alt="" />
                            </div>
                            <div className="brand">
                                ASUS
                            </div>
                            <div className="body_title">
                                ASUS ZenBook pro duo UX581GV
                            </div>
                            <div className="rate">
                                *****
                                <span className="rate_count">4.5(20)</span>
                            </div>
                            <div className="price">
                                $2,899,99 <span className="discount_price">$3,000,00</span>
                            </div>
                            <div className="stock_count">
                                32 available in stock
                            </div>
                        </div>
                    </div>
                    {/* /////////2/////// */}
                    <div className="DiscountsList_card">
                        <div className="discount_amount">
                            <IconContext.Provider value={{ color: "white", className: "discount_amount_icon" }}>
                                <div>
                                    <IoMdAperture />
                                </div>
                            </IconContext.Provider>
                                save $100
                        </div>
                        <div className="DiscountsList_card_content">
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
                            <div className="image">
                                <img src="./assets/beoplay.jpg" alt="" />
                            </div>
                            <div className="brand">
                                ASUS
                            </div>
                            <div className="body_title">
                                ASUS ZenBook pro duo UX581GV
                            </div>
                            <div className="rate">
                                *****
                                <span className="rate_count">4.5(20)</span>
                            </div>
                            <div className="price">
                                $2,899,99 <span className="discount_price">$3,000,00</span>
                            </div>
                            <div className="stock_count">
                                32 available in stock
                            </div>
                        </div>
                    </div>
                    {/* //////////3///////// */}
                    <div className="DiscountsList_card">
                        <div className="discount_amount">
                            <IconContext.Provider value={{ color: "white", className: "discount_amount_icon" }}>
                                <div>
                                    <IoMdAperture />
                                </div>
                            </IconContext.Provider>
                                save $100
                        </div>
                        <div className="DiscountsList_card_content">
                            <div className="flash_deal">

                            </div>
                            <div className="image">
                                <img src="./assets/watch.jpg" alt="" />
                            </div>
                            <div className="brand">
                                ASUS
                            </div>
                            <div className="body_title">
                                ASUS ZenBook pro duo UX581GV
                            </div>
                            <div className="rate">
                                *****
                                <span className="rate_count">4.5(20)</span>
                            </div>
                            <div className="price">
                                $2,899,99 <span className="discount_price">$3,000,00</span>
                            </div>
                            <div className="stock_count">
                                32 available in stock
                            </div>
                        </div>
                    </div>
                    {/* //////////4//////////// */}
                    <div className="DiscountsList_card">
                        <div className="discount_amount">
                            <IconContext.Provider value={{ color: "white", className: "discount_amount_icon" }}>
                                <div>
                                    <IoMdAperture />
                                </div>
                            </IconContext.Provider>
                                save $100
                        </div>
                        <div className="DiscountsList_card_content">
                            <div className="flash_deal">

                            </div>
                            <div className="image">
                                <img src="./assets/playstation.jpg" alt="" />
                            </div>
                            <div className="brand">
                                ASUS
                            </div>
                            <div className="body_title">
                                ASUS ZenBook pro duo UX581GV
                            </div>
                            <div className="rate">
                                *****
                                <span className="rate_count">4.5(20)</span>
                            </div>
                            <div className="price">
                                $2,899,99 <span className="discount_price">$3,000,00</span>
                            </div>
                            <div className="stock_count">
                                32 available in stock
                            </div>
                        </div>
                    </div>
                    {/* ///////////5/////// */}
                    <div className="DiscountsList_card">
                        <div className="discount_amount">
                            <IconContext.Provider value={{ color: "white", className: "discount_amount_icon" }}>
                                <div>
                                    <IoMdAperture />
                                </div>
                            </IconContext.Provider>
                                save $100
                        </div>
                        <div className="DiscountsList_card_content">
                            <div className="flash_deal">

                            </div>
                            <div className="image">
                                <img src="./assets/playstation.jpg" alt="" />
                            </div>
                            <div className="brand">
                                ASUS
                            </div>
                            <div className="body_title">
                                ASUS ZenBook pro duo UX581GV
                            </div>
                            <div className="rate">
                                *****
                                <span className="rate_count">4.5(20)</span>
                            </div>
                            <div className="price">
                                $2,899,99 <span className="discount_price">$3,000,00</span>
                            </div>
                            <div className="stock_count">
                                32 available in stock
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
)
};