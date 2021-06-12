import React from 'react';
import './index.scss';
import { IoMdAperture } from 'react-icons/io';
import { TiFlash } from 'react-icons/ti';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { PropTypes } from 'prop-types';
import { Slider } from '../../../../components/Slider';
import { ProductCard } from '../../../../components/ProductCard';

export const DiscountsList = (props) => {

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 4,
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

    const renderItem = (item) => {
        return (
            <div>
                <ProductCard
                    data={discountListData}
                    isDiscount={true}
                    item ={item}
                />
            </div>
            /*
            <div className="discounts_list_card">
                <div className="discount_amount">
                    <IconContext.Provider value={{ color: "white", className: "discount_amount_icon" }}>
                        <div>
                            <IoMdAperture />
                        </div>
                    </IconContext.Provider>
                    save ${item.discount_amount}
                </div>
                <div className="discounts_list_card_content">
                    {item.flash_deal === "true" ?
                        <div className="flash_deal_wrapper">
                            <div className="flash_deal">
                                <IconContext.Provider
                                    value={{ color: "white", className: "discount_amount_icon" }}>
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
                        <img src={item.image} alt="" />
                    </div>
                    <div className="discount_product_brand">
                        {item.brand}
                    </div>
                    <div className="body_title">
                        {item.title}
                    </div>
                    <div className="discount_product_rate">
                        <Rate
                            value={4}
                            allowHalf="true"
                            disabled="true"
                        />
                        <span className="rate_count rate_percentage">{item.rate}</span>
                        <span className="rate_count">{item.rate_count}</span>
                    </div>
                    <div className="discount_product_price">
                        ${item.price} <span className="discount_price">${item.discount_price}</span>
                    </div>
                    <div className="stock_count">
                        {item.stock_count > "1" ?
                            <div className={`progress_bar ${item.stock_count > 9 ? "greenstock" : "orangeStock"}`}>
                                <div className="bar">
                                    <Line
                                        percent={item.stock_count > 20 ? "80" : "40"}
                                        strokeWidth="10"
                                        strokeColor={item.stock_count > 9 ? "#088a3c" : "#ffbc00"}
                                        trailWidth="9"
                                    />
                                </div>
                                <div className="bar_desc">{item.stock_count} Available in stock</div>
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
            */
        )
    }

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
                    <Slider
                        settings={settings}
                        data={discountListData}
                        renderItem={renderItem}
                    />
                </div>
            </div>
        </div>
    )
};

DiscountsList.propTypes = {
    discountListData: PropTypes.shape({
        id: PropTypes.number,
        discount_amount: PropTypes.number,
        flash_deal: PropTypes.bool,
        image: PropTypes.string,
        brand: PropTypes.string,
        title: PropTypes.string,
        rate: PropTypes.number,
        rate_count: PropTypes.number,
        price: PropTypes.number,
        discount_price: PropTypes.number,
        stock_count: PropTypes.number,
    })
};