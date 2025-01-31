import React from 'react';
import './index.scss';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const HeroView = (props) => {
    const { heroViewData } = props;
    return (
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
                        <div className="desc">
                            {heroViewData.description}
                        </div>
                        <div className="heroView_mainBtn" >
                            <Link
                                className="mainBtn"
                                to={heroViewData.action_link}>
                                Browse Products
                            </Link>
                        </div>

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
    )
};

HeroView.propTypes = {
    heroViewData: PropTypes.shape({
        promotion_text: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        action_link: PropTypes.string,
        assistant_image: PropTypes.string,
        bg_image: PropTypes.string,
    })
};
export default HeroView
