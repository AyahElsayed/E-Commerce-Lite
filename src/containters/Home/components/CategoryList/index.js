import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Slider } from '../../../../components/Slider';

export const CategoryList = (props) => {

    const { categoryListData } = props;

    const renderItem = (item, index) => {
        return (
            <div
                className={`home_category_card  ${(index - 1) % 3 === 0 ? 'home_category_mid_card' : ''}`}
                key={item.id}>
                <div className="home_category_content_container">
                    <div className="home_category_content">
                        <h3 className="home_category_title">
                            {item.title}
                        </h3>
                        <div className="home_category_desc">
                            {item.description}
                        </div>
                        <div className="home_category_mainBtn">
                            <div className="home_category_mainBtn_des">
                                <Link
                                    to={item.action_link} >
                                    Shop Now
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_category_img">
                    <img
                        src={item.image}
                        alt={item.alt_value}
                    />
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="CategoryList">
                <div className="content-container slider-container">
                    <div className="">
                        <Slider
                            renderItem={renderItem}
                            // settings={settings} // defautl settings
                            data={categoryListData}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};

CategoryList.propTypes = {
    categoryListData: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        action_link: PropTypes.string,
        image: PropTypes.string,
        alt_value: PropTypes.string,
    })
};

export default CategoryList;