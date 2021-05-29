import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SliderComponent } from '../../../../components/Slider';

export const CategoryList = (props) => {

    const { categoryListData } = props;

    const renderItem = (item,index )=> {
        return (
            <div
                className={`home_category_card  ${(index - 1) % 3 === 0 ? 'home_category_mid_card' : ''}`}
                key={item.id}>
                <div className="home_category_content">
                    <h3 className="home_category_title">
                        {item.title}
                    </h3>
                    <p className="home_category_desc">
                        {item.description}
                    </p>
                    <div className="home_category_mainBtn">
                        <Link
                            to={item.action_link} >
                            Shop Now
                        </Link>
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
                        <SliderComponent
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