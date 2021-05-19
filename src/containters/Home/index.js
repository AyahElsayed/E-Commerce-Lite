import React from "react";
import { useEffect, useState } from "react";
import './index.scss';
import { heroView } from "./services/heroView";
import HeroView from './components/HeroView';
import CategoryList from "./components/CategoryList";
import { categoryList } from './services/categoryList';

export const Home = () => {
    const [heroViewData, setHeroViewData] = useState({});
    const [categoryListData, setCategoryListData] = useState([]);


    useEffect(() => {
        heroView().then(heroViewData => {
            console.log('heroViewData', heroViewData.data);
            setHeroViewData(heroViewData.data);
        }).catch((error) => {
            console.log('heroView error', error);
        });

        categoryList().then(categoryListData => {
            console.log('categoryList', categoryListData.data);
            setCategoryListData(categoryListData.data);
        }).catch((error) => {
            console.log('categoryList error', error);
        });
    }, []);

    return <div className="">
        <HeroView  heroViewData={heroViewData}/>
        {categoryListData.length > 0 && <CategoryList categoryListData={categoryListData} />}
    </div>;
};
