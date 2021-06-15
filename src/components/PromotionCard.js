import React from 'react';
import { Link } from 'react-router-dom';
import * as RemixIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
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

    const TopIcon = RemixIcons[itemData.icon];

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
                            <TopIcon />
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

    const BottomIcon = GiIcons[itemData.icon];

    return (
        <div className="promotions-item">
            <div className="promotions-details beauty-details" style={{backgroundColor: itemData.bg_color}}>
                <div className="promotions-icon">
                    <IconContext.Provider
                        value={{ color: "", className: "promotions-list-icon" }}>
                        <div>
                            <BottomIcon />
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






