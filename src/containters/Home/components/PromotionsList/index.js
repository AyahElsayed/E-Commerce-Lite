import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { RiTShirtLine, RiMotorbikeLine } from 'react-icons/ri';
import { GiPerfumeBottle } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

export const PromotionsList = (props) => {

    const { promotionsListData } = props;

    return (
        <div className="promotions-List">
            <div className="promotions-list-header">
                <h3 className="promotions-header-title">
                    Active Promotions
                </h3>
                <div className="all-promotions">
                    <Link
                        to="/promotionsList/allpromotions" >
                        View All Promotions
                    </Link>
                </div>
            </div>

            <div className="promotions-list-contnet">
                <div className="promotions-item">
                    <div className="promotions-image">
                        <img src={promotionsListData[0].image} alt="" />
                    </div>
                    <div className="promotions-details">
                        <div className="promotions-icon">
                            <IconContext.Provider
                                value={{ color: "", className: "promotions-list-icon" }}>
                                <div>
                                    <RiTShirtLine />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className="promotions-desc">{promotionsListData[0].desc}</div>
                        <div className="promotions-browse">
                            <Link >
                                Browse Products
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="promotions-item">
                    <div className="promotions-details beauty-details">
                        <div className="promotions-icon">
                            <IconContext.Provider
                                value={{ color: "", className: "promotions-list-icon" }}>
                                <div>
                                    <GiPerfumeBottle />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className="promotions-desc">{promotionsListData[1].desc}</div>
                        <div className="promotions-browse">
                            <Link >
                                Browse Products
                            </Link>
                        </div>
                    </div>
                    <div className="promotions-image">
                        <img src={promotionsListData[1].image} alt="" />
                    </div>
                </div>

                <div className="promotions-item">
                    <div className="promotions-image">
                        <img src={promotionsListData[2].image} alt="" />
                    </div>
                    <div className="promotions-details">
                        <div className="promotions-icon">
                            <IconContext.Provider
                                value={{ color: "", className: "promotions-list-icon" }}>
                                <div>
                                    <RiMotorbikeLine />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className="promotions-desc">{promotionsListData[2].desc}</div>
                        <div className="promotions-browse">
                            <Link >
                                Browse Products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

PromotionsList.propTypes = {
    promotionsListData: PropTypes.shape({
            id: PropTypes.number,
            image: PropTypes.string,
            desc: PropTypes.string,
        })
 };



