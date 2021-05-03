import './index.scss'
import { useState } from 'react';
import { MdLocalShipping } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { FiShoppingCart } from 'react-icons/fi'


export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showMenuAccount, setShowMenuAccount] = useState(false)
    const [showMenuLang, setShowMenuLang] = useState(false)

    const handleDropdown = () => {
        setShowMenu(!showMenu)
    }
    const handleDropdownAccount = () => {
        setShowMenuAccount(!showMenuAccount)
    }
    const handleDropdownLang = () => {
        setShowMenuLang(!showMenuLang)
    }
    return (
        <div>
            <div className="header_top">
                <div className="container">
                    <div className="shipping">
                        <span className="icon"><MdLocalShipping /></span>
                        <span className="desc">Free shiping on orders over $100</span>
                    </div>
                    <div className="subscribe">
                        <div className="content">
                            <span>Don't miss out.</span>
                            <a href="#"> Subscribe Now</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* /////////////////////// */}

            <div className="header_search_bar">
                <div className="container">
                    <p className="logo">
                        store<span>logo</span>
                    </p>

                    <div className="search_bar">
                        <div className="dropdown">
                            <button onClick={handleDropdown} className="btn_dropdown">
                                All products <span className="icon"><IoIosArrowDown /></span>
                            </button>
                            {showMenu
                                ?
                                <div className="menu">
                                    <button className="btn_menu">Fashion</button>
                                    <button className="btn_menu">Electronics</button>
                                    <button className="btn_menu">Furniture</button>
                                </div>
                                : ''}

                        </div>
                        <input placeholder="Enter keywords" />
                        <p className="icon">
                            <span><BsSearch /></span>
                        </p>
                    </div>

                    <div className="account">
                        <div className="dropdown">
                            <button onClick={handleDropdownAccount}>
                                Account <span className="icon"><IoIosArrowDown /></span>
                            </button>
                            {showMenuAccount ?
                                <div className="menu">
                                    <button className="btn_menu">profile</button>
                                    <button className="btn_menu">setting</button>
                                </div>
                                : ''}
                        </div>
                    </div>
                    <div className="lang">
                        <div className="flag">
                            <img src="./assets/flag.png" alt="lang" />
                            <button className="icon" onClick={handleDropdownLang}>
                                <span ><IoIosArrowDown /></span>
                            </button>
                            {showMenuLang ?
                                <div className="menu">
                                    <button className="btn_menu">Eng</button>
                                    <button className="btn_menu">Ar</button>
                                </div>
                                : ""}
                        </div>
                        <div className="cart">
                            <span className="icon"><FiShoppingCart /></span>
                            <span>cart</span>
                            <span className="items">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
