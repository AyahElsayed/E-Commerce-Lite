import React from "react";
import { useEffect, useState } from "react";
import './index.scss';
import { heroView } from "./services/heroView";
import HeroView from './components/HeroView';
import CategoryList from "./components/CategoryList";
import { categoryList } from './services/categoryList';

export const Home = () => {
    const [heroViewData, setHeroViewData] = useState({});
    const [categoryListData, setCategoryListData] = useState({});
    // const [categoryListId, setCategoryListId] = useState(1);


    // useEffect for Hero View
    useEffect(() => {
        Promise.all([heroView()]).then(res => {
            setHeroViewData(res[0].data);
        }).catch((error) => {
            console.log('heroView error', error);
        });
    }, []);

    // useEffect for categoryList
    useEffect(() => {
        Promise.all([categoryList()]).then(res => {
            console.log('categoryList', res[0].data[0].title)
            setCategoryListData(res[0].data);
            // console.log(categoryListId)
            // setCategoryListId('iddd',res[0].data)
        }).catch((error) => {
            console.log('categoryList error', error);
        });
    }, []);

    return <div className="">
        <HeroView  heroViewData={heroViewData}/>
        <CategoryList categoryListData={categoryListData} />
    </div>;
};
