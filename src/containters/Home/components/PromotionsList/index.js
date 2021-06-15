import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PromotionCard } from '../../../../components/PromotionCard';

export const PromotionsList = (props) => {

    const { promotionsListData } = props;

    return (
        <div className="promotions-List">
            <div className="content-container container">
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
                    {
                        promotionsListData.map(promotion => (
                            <PromotionCard
                                itemData={promotion}
                            />
                        ))
                    }
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



