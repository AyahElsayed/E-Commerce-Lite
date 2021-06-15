import React from 'react';
import { IoMdAperture } from 'react-icons/io';
import { TiFlash } from 'react-icons/ti';
import { IconContext } from 'react-icons';
import { Line } from 'rc-progress';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

export const ProductCard = (props) => {
    const { isDiscount, itemData } = props;

    const getProgressBarColor = (stockCount) => {
        if (stockCount <= 1) {
            return 'hotpinkBar';
        }
        else {
            if (stockCount < 9 && stockCount > 2) {
                return 'orangeBar'
            }
            else {
                return 'greenBar'
            }
        }
    };

    const getProgressBarStrokeColor = (stockCount) => {
        if (stockCount <= 1) {
            return 'hotpink';
        }
        else {
            if (stockCount < 9 && stockCount > 2) {
                return '#ffbc00';
            }
            else {
                return '#088a3c';
            }
        }
    };

    const getItemsCountInStockMsg = (stockCount) => {
        if (stockCount <= 1) {
            return 'last product in stock';
        }
        return `${stockCount} Available in stock `;
    };

    return (
        <div>
            <div className="discounts_list_card">
                {isDiscount === true &&
                    <div className="discount_amount">
                        <IconContext.Provider value={{ color: "white", className: "discount_amount_icon" }}>
                            <div>
                                <IoMdAperture />
                            </div>
                        </IconContext.Provider>
                        save ${itemData.discount_amount}
                    </div>
                }
                <div className="discounts_list_card_content">
                    {itemData.flash_deal === "true" &&
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
                    }

                    <div className="discount_product_image">
                        <img src={itemData.image} alt={itemData.title} />
                    </div>
                    <div className="discount_product_brand">
                        {itemData.brand}
                    </div>
                    <div className="body_title">
                        {itemData.title}
                    </div>
                    <div className="discount_product_rate">
                        <Rate
                            value={4}
                            allowHalf="true"
                            disabled="true"
                        />
                        <span className="rate_count rate_percentage">{itemData.rate}</span>
                        <span className="rate_count">{itemData.rate_count}</span>
                    </div>
                    <div className="discount_product_price">
                        ${itemData.price} <span className="discount_price">${itemData.discount_price}</span>
                    </div>
                    <div className="stock_count">
                        <div className={`progress_bar ${getProgressBarColor(itemData.stock_count)}`}>
                            <div className="bar">
                                <Line
                                    percent={itemData.stock_percentage}
                                    strokeWidth="10"
                                    strokeColor={getProgressBarStrokeColor(itemData.stock_count)}
                                    trailWidth="9"
                                />
                            </div>
                            <div className="bar_desc">{getItemsCountInStockMsg(itemData.stock_count)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
