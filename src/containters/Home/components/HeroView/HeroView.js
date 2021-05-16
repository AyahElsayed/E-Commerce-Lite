import React from 'react'
import './index.scss'
import { IoIosArrowForward } from 'react-icons/io'
import { useEffect, useState } from 'react';
import { heroView } from '../../services/heroView';
import { BrowserRouter as Router, Link } from 'react-router-dom'
const HeroView = () => {
    const [promotionText, setPromotionText] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [bgImage, setBgImage] = useState('')
    const [actionLink, setActionLink] = useState('')
    const [assistantImage, setAssistantImage] = useState('')

    useEffect(() => {
        Promise.all([heroView()])
            .then(res => {
                console.log('heroView', res[0].data);
                setPromotionText(res[0].data.promotion_text)
                setTitle(res[0].data.title)
                setDescription(res[0].data.description)
                setBgImage(res[0].data.bg_image)
                setAssistantImage(res[0].data.assistant_image)
                setActionLink(res[0].data.action_link)
            }).catch((error) => {
                console.log('heroView error', error);
            });
    }, [])
    return (
        <Router>
            <div>
                <div className="HeroView">
                    <div className="container content-container">
                        <div className="content">
                            <p className="hint">
                                {promotionText}
                            </p>
                            <h1 className="title">
                                {title}
                            </h1>
                            <p className="desc">
                                {description}
                            </p>
                            <button className="mainBtn">
                                <Link to={actionLink}>
                                    Browse Products
                                </Link>
                            </button>
                            <div className="assistant">
                                <div className="content-assistant">
                                    <img src={assistantImage} alt="assistantImg" />
                                    <span>Talk to an assistant</span>
                                    <span className="icon"><IoIosArrowForward /></span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mainImg">
                            <img src={bgImage} alt="mainImg" />
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default HeroView
