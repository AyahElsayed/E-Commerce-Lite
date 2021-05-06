import React from "react";
import {useEffect, useState} from "react";
import './index.scss';
import {heroView} from "./services/heroView";

 export const Home = () => {

     const [heroViewData, setHeroViewData] = useState({});

     useEffect(() => {
         // hero view 1.2
         // category list 2
         // other API 0.7
         // TOTAL :
         Promise.all([heroView()]).then(res => {
             console.log('heroView', res[0].data);
         }).catch((error) => {
             console.log('heroView error', error);
         });
     }, []);

    return <div className="test"><h2>Home</h2></div>;
};
