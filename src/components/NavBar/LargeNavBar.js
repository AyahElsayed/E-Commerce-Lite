import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { FiShoppingCart } from 'react-icons/fi';

export const LargeNavBar = () => {

    const [isMenuShown, setIsMenuShown] = useState(false)
    const [isAccountMenuShown, setIsAccountMenuShown] = useState(false)
    const [isLanguageMenuShown, setIsLanguageMenuShown] = useState(false)

    const toggleDropDown = () => {
        setIsMenuShown(!isMenuShown)
    }
    const toggleAccountDropDown = () => {
        setIsAccountMenuShown(!isAccountMenuShown)
    }
    const toggleLanguageDropDown = () => {
        setIsLanguageMenuShown(!isLanguageMenuShown)
    }

    return (
        <>
            <div className="search_bar">
                <div className="dropdown">
                    <button
                        onClick={toggleDropDown}
                        className="btn_dropdown"
                        onBlur={() => setIsMenuShown(false)}
                    >
                        <div className="dropdown_des">
                            All products</div>
                        <span className="icon">
                            <IoIosArrowDown />
                        </span>
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
                <div className="icon_search">
                    <span><BsSearch /></span>
                </div>
            </div>

            <div className="account">
                <div className="dropdown">
                    <button
                        onClick={toggleAccountDropDown}
                        onBlur={() => setIsAccountMenuShown(false)}
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
                        onBlur={() => setIsLanguageMenuShown(false)}
                    >
                        <span ><IoIosArrowDown /></span>
                    </button>
                    {isLanguageMenuShown &&
                        <div className="menu">
                            <button className="btn_menu">En</button>
                            <button className="btn_menu">Ar</button>
                        </div>
                    }
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