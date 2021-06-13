import React from 'react';
import { IoMdAperture } from 'react-icons/io';
import { TiFlash } from 'react-icons/ti';
import { IconContext } from 'react-icons';
import { Line } from 'rc-progress';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

export const ProductCard = (props) => {
    const { isDiscount, dataItem } = props;
    // console.log('ProductCard', dataItem);

    return (
        <div>
            <div className="discounts_list_card">
                {isDiscount === true ?
                    <div className="discount_amount">
                        <IconContext.Provider value={{ color: "white", className: "discount_amount_icon" }}>
                            <div>
                                <IoMdAperture />
                            </div>
                        </IconContext.Provider>
                        save ${dataItem.discount_amount}
                    </div>
                    : ""
                }
                <div className="discounts_list_card_content">
                    {dataItem.flash_deal === "true" ?
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
                        <img src={dataItem.image} alt="" />
                    </div>
                    <div className="discount_product_brand">
                        {dataItem.brand}
                    </div>
                    <div className="body_title">
                        {dataItem.title}
                    </div>
                    <div className="discount_product_rate">
                        <Rate
                            value={4}
                            allowHalf="true"
                            disabled="true"
                        />
                        <span className="rate_count rate_percentage">{dataItem.rate}</span>
                        <span className="rate_count">{dataItem.rate_count}</span>
                    </div>
                    <div className="discount_product_price">
                        ${dataItem.price} <span className="discount_price">${dataItem.discount_price}</span>
                    </div>
                    <div className="stock_count">
                        {dataItem.stock_count > "1" ?
                            <div className={`progress_bar ${dataItem.stock_count > 9 ? "greenstock" : "orangeStock"}`}>
                                <div className="bar">
                                    <Line
                                        percent={dataItem.stock_count > 20 ? "80" : "40"}
                                        strokeWidth="10"
                                        strokeColor={dataItem.stock_count > 9 ? "#088a3c" : "#ffbc00"}
                                        trailWidth="9"
                                    />
                                </div>
                                <div className="bar_desc">{dataItem.stock_count} Available in stock</div>
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
        </div>
    )
};

