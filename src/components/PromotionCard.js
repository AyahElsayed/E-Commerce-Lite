import React from 'react';
import { Link } from 'react-router-dom';
import * as RemixIcons from 'react-icons/ri';
import { GiPerfumeBottle } from 'react-icons/gi';
import { IconContext } from 'react-icons';

export const PromotionCard = (props) => {
    const { itemData } = props;

    if (itemData.name === "beauty")
        return (
            <BottomImagePromotion
                itemData={itemData}
            />
        );

    return (
        <TopImagePromotion itemData={itemData}/>
    );
};

const TopImagePromotion = (props) => {
    const { itemData } = props;

    const RiTShirtLine = RemixIcons["RiTShirtLine"];
    const RiMotorbikeLine = RemixIcons["RiMotorbikeLine"];

    return (
        <div className="promotions-item">
            <div className="promotions-image">
                <img src={itemData.image} alt={itemData.name} />
            </div>
            <div className="promotions-details" style={{backgroundColor: itemData.bg_color}}>
                <div className="promotions-icon">
                    <IconContext.Provider
                        value={{ color: "", className: "promotions-list-icon" }}>
                        <div>
                            {itemData.name === "sweater" ?
                                <RiTShirtLine />
                                :
                                <RiMotorbikeLine />
                            }
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="promotions-desc">{itemData.desc}</div>
                <div className="promotions-browse">
                    <Link >
                        Browse Products
                    </Link>
                </div>
            </div>
        </div>
    );
};

const BottomImagePromotion = (props) => {
    const { itemData } = props;

    return (
        <div className="promotions-item">
            <div className="promotions-details beauty-details" style={{backgroundColor: itemData.bg_color}}>
                <div className="promotions-icon">
                    <IconContext.Provider
                        value={{ color: "", className: "promotions-list-icon" }}>
                        <div>
                            <GiPerfumeBottle />
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="promotions-desc">{itemData.desc}</div>
                <div className="promotions-browse">
                    <Link >
                        Browse Products
                    </Link>
                </div>
            </div>
            <div className="promotions-image">
                <img src={itemData.image} alt={itemData.name} />
            </div>
        </div>
    );
};






