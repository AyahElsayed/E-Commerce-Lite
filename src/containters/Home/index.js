import React from "react";
import { useEffect, useState } from "react";
import './index.scss';
import { heroView } from "./services/heroView";
import { HeroView } from './components/HeroView';
import { CategoryList } from "./components/CategoryList";
import { categoryList } from './services/categoryList';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

export const Home = () => {
    const [heroViewData, setHeroViewData] = useState({});
    const [categoryListData, setCategoryListData] = useState([]);
    const [categoryListDataLoading, setCategoryListDataLoading] = useState(true);

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
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
    }, []);

    return <div className="">
        <HeroView heroViewData={heroViewData} />
        {categoryListDataLoading
            ?
            <div className="content-container">
                {/* loading.... */}
                <ClipLoader  loading={categoryListDataLoading} css={override} size={70} />
            </div>

            :
            categoryListData.length > 0 && <CategoryList categoryListData={categoryListData} />
        }
    </div>;
};


