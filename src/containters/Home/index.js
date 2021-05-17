import React from "react";
import { useEffect, useState } from "react";
import './index.scss';
import { heroView } from "./services/heroView";
import HeroView from './components/HeroView';
import CategoryList from "./components/CategoryList";

export const Home = () => {
    const [heroViewData, setHeroViewData] = useState({});

    useEffect(() => {
        Promise.all([heroView()]).then(res => {
            setHeroViewData(res[0].data);
        }).catch((error) => {
            console.log('heroView error', error);
        });
    }, []);

    return <div className="">
        <HeroView  heroViewData={heroViewData}/>
        <CategoryList />
    </div>;
};
