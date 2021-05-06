import './index.scss'
import { useState } from 'react';
import { MdLocalShipping } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { FiShoppingCart } from 'react-icons/fi'


export const Header = () => {
    const [isMenuShown, setIsMenuShown] = useState(false)
    const [isAccountMenuShown, setIsAccountMenuShown] = useState(false)
    const [isLanguageMenuShown  , setIsLanguageMenuShown] = useState(false)

    const toggleDropDown = () => {
        setIsMenuShown(!isMenuShown)
    }
    const toggleAccountDropDown = () => {
        setIsAccountMenuShown(!isAccountMenuShown)
    }
    const toggleLanguageDropDown = () => {
        setIsLanguageMenuShown  (!isLanguageMenuShown  )
    }
    return (
        <>
            <header className="header-top">
                <div className="container">
                    <div className="shipping">
                        <span className="icon"><MdLocalShipping /></span>
                        <span className="desc">Free shiping on orders over $100</span>
                    </div>
                    <div className="subscribe">
                        <div className="content">
                            <span className="hint">Don't miss out.</span>
                            <a href="#" className="subscribe_link"> Subscribe Now</a>
                        </div>
                    </div>
                </div>
            </header>

            {/* /////////////////////// */}

            <header className="header_search_bar">
                <div className="container">
                    <div className="logo">
                        store<span className="subLogo">logo</span>
                    </div>

                    <div className="search_bar">
                        <div className="dropdown">
                            <button 
                            onClick={toggleDropDown} 
                            className="btn_dropdown"
                            onBlur={()=>setIsMenuShown(false)}
                            >
                                All products <span className="icon"><IoIosArrowDown /></span>
                            </button>
                            {isMenuShown &&
                                <div className="menu">
                                    <button className="btn_menu">Fashion</button>
                                    <button className="btn_menu">Electronics</button>
                                    <button className="btn_menu">Furniture</button>
                                </div>
                            }

                        </div>
                        <input placeholder="Enter keywords" />
                        <p className="icon_search">
                            <span><BsSearch /></span>
                        </p>
                    </div>

                    <div className="account">
                        <div className="dropdown">
                            <button 
                            onClick={toggleAccountDropDown}
                            onBlur={()=>setIsAccountMenuShown(false)}
                            >
                                Account <span className="icon"><IoIosArrowDown /></span>
                            </button>
                            {isAccountMenuShown &&
                                <div className="menu">
                                    <button className="btn_menu">profile</button>
                                    <button className="btn_menu">setting</button>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="lang">
                        <div className="flag">
                            <div className="img"><img src="./assets/flag.png" alt="lang" /></div>
                            <button 
                            className="icon" 
                            onClick={toggleLanguageDropDown}
                            onBlur={()=>setIsLanguageMenuShown  (false)}
                            >
                                <span ><IoIosArrowDown /></span>
                            </button>
                            {isLanguageMenuShown   &&
                                <div className="menu">
                                    <button className="btn_menu">Eng</button>
                                    <button className="btn_menu">Ar</button>
                                </div>
                            }
                        </div>
                        <div className="cart">
                            <span className="icon cart-item"><FiShoppingCart /></span>
                            <span className="cart-item">cart</span>
                            <span className="items cart-item">0</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
