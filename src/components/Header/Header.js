import './index.scss'
import { MdLocalShipping } from 'react-icons/md'
export const Header = () => {
    return (
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
    );
};
