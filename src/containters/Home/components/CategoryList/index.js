import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CategoryList = (props) => {

    const {categoryListData} = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <>
            <div className="CategoryList">
                <div className="content-container slider-container">
                    <div className="">
                        <Slider {...settings}>
                            {/* /////1//// */}
                            <div className="card">
                                <div className="content">
                                    <h3 className="title">
                                        
                                        {categoryListData.title}
                                    </h3>
                                    <p className="desc">
                                        commodo dolor sit amet cum diceam est un partuient
                                    </p>
                                    <div className="mainBtn">
                                        <Link
                                            to="/fashion" >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="./assets/Shoe.JPG" alt="shoes" />
                                </div>
                            </div>
                            {/* /////2///// */}
                            <div className="card mid-card">
                                <div className="content">
                                    <h3 className="title">
                                        Electronics
                                    </h3>
                                    <p className="desc">
                                        commodo dolor sit amet cum diceam est un partuient
                                    </p>
                                    <div className="mainBtn">
                                        <Link
                                            to="/electronics" >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="./assets/headphone.JPG" alt="headphone" />
                                </div>
                            </div>
                            {/* /////3////// */}
                            <div className="card">
                                <div className="content">
                                    <h3 className="title">
                                        Furniture
                                    </h3>
                                    <p className="desc">
                                        commodo dolor sit amet cum diceam est un partuient
                                    </p>
                                    <div className="mainBtn">
                                        <Link
                                            to="/furniture" >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="./assets/chair.jpg" alt="chair" />
                                </div>
                            </div>
                            {/* //////4///////// */}
                            <div className="card">
                                <div className="content">
                                    <h3 className="title">
                                        Beauty products
                                    </h3>
                                    <p className="desc">
                                        commodo dolor sit amet cum diceam est un partuient
                                    </p>
                                    <div className="mainBtn">
                                        <Link
                                            to="/BeautyProducts" >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="./assets/cosmetic.png" alt="beauty" />
                                </div>
                            </div>
                            {/* /////5///// */}
                            <div className="card mid-card">
                                <div className="content">
                                    <h3 className="title">
                                        Kitchen
                                    </h3>
                                    <p className="desc">
                                        commodo dolor sit amet cum diceam est un partuient
                                    </p>
                                    <div className="mainBtn">
                                        <Link
                                            to="/kitchen" >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="./assets/kitchen.png" alt="kitchen" />
                                </div>
                            </div>
                            {/* /////6////// */}
                            <div className="card">
                                <div className="content">
                                    <h3 className="title">
                                        Toys
                                    </h3>
                                    <p className="desc">
                                        commodo dolor sit amet cum diceam est un partuient
                                    </p>
                                    <div className="mainBtn">
                                        <Link
                                            to="/Toys" >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="./assets/Toys.png" alt="Toys" />
                                </div>
                            </div>
                            {/* ////7///// */}
                            <div className="card">
                                <div className="content">
                                    <h3 className="title">
                                    Jewelry
                                    </h3>
                                    <p className="desc">
                                        commodo dolor sit amet cum diceam est un partuient
                                    </p>
                                    <div className="mainBtn">
                                        <Link
                                            to="/Jewelry" >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="./assets/ring.png" alt="ring" />
                                </div>
                            </div>
                            {/* /////8///// */}
                            <div className="card mid-card">
                                <div className="content">
                                    <h3 className="title">
                                    Perfumes
                                    </h3>
                                    <p className="desc">
                                        commodo dolor sit amet cum diceam est un partuient
                                    </p>
                                    <div className="mainBtn">
                                        <Link
                                            to="/Perfumes" >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="./assets/Perfumes.png" alt="Perfumes" />
                                </div>
                            </div>
                            {/* /////9////// */}
                            <div className="card">
                                <div className="content">
                                    <h3 className="title">
                                    Books
                                    </h3>
                                    <p className="desc">
                                        commodo dolor sit amet cum diceam est un partuient
                                    </p>
                                    <div className="mainBtn">
                                        <Link
                                            to="/Books" >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="./assets/Books.png" alt="Books" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CategoryList;
