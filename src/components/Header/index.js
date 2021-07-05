import './index.scss'
import { MdLocalShipping } from 'react-icons/md'
import { NavBar } from '../NavBar';

export const Header = () => {

    return (
        <>
            <header className="header-top">
                <div className="header-top-container content-container">
                    <div className="shipping">
                        <div className="icon"><MdLocalShipping /></div>
                        <div className="desc">Free shiping on orders over $100</div>
                    </div>
                    <div className="subscribe">
                        <div className="content">
                            <span className="hint">Don't miss out.</span>
                            <a href="Subscribe" className="subscribe_link"> Subscribe Now</a>
                        </div>
                    </div>
                </div>
            </header>

            {/* /////////////////////// */}

            <header className="header_search_bar">
                <div className="container content-container">
                    <div className="logo">
                        store<span className="subLogo">logo</span>
                    </div>

                    <NavBar />

                </div>
            </header>
        </>
    );
};
