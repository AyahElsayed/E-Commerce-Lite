import React from 'react';
import { Link } from 'react-router-dom';
import { RiTShirtLine, RiMotorbikeLine } from 'react-icons/ri';
import { GiPerfumeBottle } from 'react-icons/gi';
import { IconContext } from 'react-icons';

export const PromotionCard = (props) => {
    const { data } = props;

    if (data.name === "beauty")
        return (
            <BottomImagePromotion
            data={data}
            />
        )
        return (<TopImagePromotion
            data={data}
        />)
};

const TopImagePromotion = (props) => {
    const { data } = props;
    return (
        <>
            {data.map((item) =>
                item.name === "beauty" ?
                    <BottomImagePromotion data={data} />
                    :
                    <div className="promotions-item">
                        <div className="promotions-image">
                            <img src={item.image} alt={item.name} />
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
    const { data } = props;
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
                <div className="promotions-desc">{data[1].desc}</div>
                <div className="promotions-browse">
                    <Link >
                        Browse Products
                    </Link>
                </div>
            </div>
            <div className="promotions-image">
                <img src={data[1].image} alt={data[1].name} />
            </div>
        </div>
    )
};






