import React from 'react'
import './index.scss'
import { IoIosArrowForward } from 'react-icons/io'

const HeroView = () => {
    return (
        <div>
            <div className="HeroView">
                <div className="container">
                    <div className="content">
                        <p className="hint">
                            25% off promotional sale
                        </p>
                        <h1 className="title">
                            All you need in the kitchen.
                        </h1>
                        <p className="desc">
                            commodo dolor sit amet cum diceam est un partuient nascetur mas ligula massa consequat est un dolor
                        </p>
                        <button className="mainBtn">Browse Products</button>
                        <div className="assistant">
                            <div className="content">
                                <img src="./assets/assistant.png" alt="assistantImg" />
                                <span>Talk to an assistant</span>
                                <span className="icon"><IoIosArrowForward /></span>
                            </div>
                        </div>
                    </div>

                    <div className="mainImg">
                        <img src="./assets/handTool.png" alt="mainImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroView
