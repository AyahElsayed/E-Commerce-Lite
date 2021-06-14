import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
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
                    isDiscount
                    itemData ={item} 
                />
            </div>
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