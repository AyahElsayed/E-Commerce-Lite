import React from 'react';
import { Link } from 'react-router-dom';
import { RiTShirtLine, RiMotorbikeLine } from 'react-icons/ri';
import { GiPerfumeBottle } from 'react-icons/gi';
import { IconContext } from 'react-icons';

export const PromotionCard = (props) => {
    const { promotionsListData } = props;
    // console.log("PromotionCard", promotionsListData);

    if (promotionsListData.name === "beauty")
        return (
            <BottomImagePromotion
                promotionsListData={promotionsListData}
            />
        )

    else
        return (<TopImagePromotion
            promotionsListData={promotionsListData}
        />)
};

const TopImagePromotion = (props) => {
    const { promotionsListData } = props;
    // console.log("TopImagePromotion", promotionsListData);
    return (
        <>
            {promotionsListData.map((item) =>
                item.name === "beauty" ?
                    <BottomImagePromotion promotionsListData={promotionsListData} />
                    :
                    <div className="promotions-item">
                        <div className="promotions-image">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="promotions-details">
                            <div className="promotions-icon">
                                <IconContext.Provider
                                    value={{ color: "", className: "promotions-list-icon" }}>
                                    <div>
                                        {item.name === "sweater" ?
                                            <RiTShirtLine />
                                            :
                                            <RiMotorbikeLine />
                                        }
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className="promotions-desc">{item.desc}</div>
                            <div className="promotions-browse">
                                <Link >
                                    Browse Products
                                </Link>
                            </div>
                        </div>
                    </div>
            )}
        </>
    )
};

const BottomImagePromotion = (props) => {
    const { promotionsListData } = props;
    // console.log("BottomImagePromotion", promotionsListData);
    return (
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
    )
};






