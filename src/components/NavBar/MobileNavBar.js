import React from 'react';
import Collapsible from 'react-collapsible';
import { BsSearch } from 'react-icons/bs';
// import { IoIosArrowDown } from 'react-icons/io';
import { FiShoppingCart } from 'react-icons/fi';

export const MobileNavBar = () => {

    return (
        <>
            <div className="search_bar">
                <Collapsible trigger="All products"
                    transitionCloseTime="400"
                >
                    <button className="btn_menu">Fashion</button>
                    <button className="btn_menu">Electronics</button>
                    <button className="btn_menu">Furniture</button>

                </Collapsible>

                <input placeholder="Enter keywords" />
                <div className="icon_search">
                    <span><BsSearch /></span>
                </div>
            </div>

            <div className="account">
                <Collapsible trigger="Account"
                    transitionCloseTime="400"
                >
                    <button className="btn_menu">profile</button>
                            <button className="btn_menu">setting</button>
                </Collapsible>
            </div>
            <div className="line"></div>
            <div className="lang">
                <div className="flag">
                    <div className="img"><img src="./assets/flag.png" alt="lang" /></div>
                    <Collapsible trigger="All"
                        transitionCloseTime="400"
                    >
                        <button className="btn_menu">En</button>
                            <button className="btn_menu">Ar</button>
                    </Collapsible>
                </div>
                <div className="cart">
                    <div className="icon cart-item"><FiShoppingCart /></div>
                    <div className="cart-item">cart</div>
                    <div className="items cart-item">0</div>
                </div>
            </div>
        </>
    )
};
