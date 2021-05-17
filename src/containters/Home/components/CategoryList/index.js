import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';


const CategoryList = () => {
    return (
        <div className="CategoryList">
            <div className="content-container">
                <div className="card">
                    <div className="content">
                        <h3 className="title">
                            Fashion
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

            </div>
        </div>
    )
};

export default CategoryList
