import axios from 'axios';
import {BASE_URL, END_POINTS} from '../../../constants/api';

export const discountsList = () => {
    return axios.get(`${BASE_URL}${END_POINTS.discountsList}`);
};
