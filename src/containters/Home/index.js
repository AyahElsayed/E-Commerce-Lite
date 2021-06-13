import React from "react";
import { useEffect, useState } from "react";
import './index.scss';
import { heroView } from "./services/heroView";
import { HeroView } from './components/HeroView';
import { CategoryList } from "./components/CategoryList";
import { categoryList } from './services/categoryList';
import { discountsList } from './services/discountsList';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import { DiscountsList } from "./components/DiscountsList";
import { PromotionsList } from "./components/PromotionsList";
import { promotionsList } from "./services/promotionsList";

export const Home = () => {
    const [heroViewData, setHeroViewData] = useState({});
    const [categoryListData, setCategoryListData] = useState([]);
    const [discountListData, setDiscountListData] = useState([]);
    const [promotionsListData, setPromotionsListData] = useState([]);
    const [categoryListDataLoading, setCategoryListDataLoading] = useState(true);
    const [discountsListDataLoading, setDiscountsListDataLoading] = useState(true);
    const [promotionsListDataLoading, setPromotionsListDataLoading] = useState(true);

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: #36D7B7;
        `;

    useEffect(() => {
        heroView().then(heroViewData => {
            // console.log('heroViewData', heroViewData.data);
            setHeroViewData(heroViewData.data);
        }).catch((error) => {
            console.log('heroView error', error);
        });

        categoryList().then(categoryListData => {
            // console.log('categoryList', categoryListData.data);
            setCategoryListData(categoryListData.data);
            setCategoryListDataLoading(false)
        }).catch((error) => {
            console.log('categoryList error', error);
        });

        discountsList().then(discountListData => {
            // console.log('discountListData', discountListData.data);
            setDiscountListData(discountListData.data)
            setDiscountsListDataLoading(false)
        }).catch((error) => {
            console.log('discountList error', error);
        });

        promotionsList().then(promotionsListData => {
            // console.log('promotionsListData', promotionsListData.data)
            setPromotionsListData(promotionsListData.data)
            setPromotionsListDataLoading(false)
        }).catch((error) => {
            console.log('promotionsList error', error);
        });
    }, []);

    return <div className="">
        <HeroView heroViewData={heroViewData} />
        {categoryListDataLoading
            ?
            <div className="content-container">
                {/* loading.... */}
                <ClipLoader loading={categoryListDataLoading} css={override} size={70} />
            </div>
            :
            categoryListData.length > 0 && <CategoryList categoryListData={categoryListData} />
        }

        {discountsListDataLoading
            ?
            <div className="content-container">
                {/* loading.... */}
                <ClipLoader loading={discountsListDataLoading} css={override} size={70} />
            </div>
            :
            discountListData.length > 0 && <DiscountsList discountListData={discountListData} />
        }
        {promotionsListDataLoading ?
            <div className="content-container">
                {/* loading.... */}
                <ClipLoader loading={promotionsListDataLoading} css={override} size={70} />
            </div>
            :
            promotionsListData.length > 0 && <PromotionsList promotionsListData={promotionsListData} /> 
        }

    </div>;
};


