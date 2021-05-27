import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';


export const NextArrow = (props) => {

    const { onClick } = props;
    return (
        <div className="next_arrow"
            onClick={onClick}
        >
            <IoIosArrowForward />
        </div>
    );

}

export const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="prev_arrow"
            onClick={onClick}
        >
            <IoIosArrowBack />
        </div>
    );
}



