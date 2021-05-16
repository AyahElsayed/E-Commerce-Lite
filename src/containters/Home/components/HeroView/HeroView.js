import React from 'react';
import './index.scss';
import { IoIosArrowForward } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { heroView } from '../../services/heroView';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const HeroView = () => {
    const [heroViewData, setHeroViewData] = useState({});

    useEffect(() => {
        Promise.all([heroView()])
            .then(res => {
                // console.log('heroView', res[0].data);
                setHeroViewData(res[0].data);
                console.log(heroViewData);
            }).catch((error) => {
                console.log('heroView error', error);
            });
    }, []);
    return (
        <Router>
            <div>
                <div className="HeroView">
                    <div className="container content-container">
                        <div className="content">
                            <p className="hint">
                                {heroViewData.promotion_text}
                            </p>
                            <h1 className="title">
                                {heroViewData.title}
                            </h1>
                            <p className="desc">
                                {heroViewData.description}
                            </p>
                            <button className="mainBtn">
                                <Link to={heroViewData.action_link}>
                                    Browse Products
                                </Link>
                            </button>
                            <div className="assistant">
                                <div className="content-assistant">
                                    <img src={heroViewData.assistant_image} alt="assistantImg" />
                                    <span>Talk to an assistant</span>
                                    <span className="icon"><IoIosArrowForward /></span>
                                </div>
                            </div>
                        </div>

                        <div className="mainImg">
                            <img src={heroViewData.bg_image} alt="mainImg" />
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
};

export default HeroView
