import React from 'react';
import {Home} from './Containters/Home';
import {Products} from './Containters/Products';
import {About} from './Containters/About';

export const routes = [
    {path: '/products', exact: true, name: 'Products', component: Products},
    {path: '/about', exact: true, name: 'About', component: About},
    {path: '/', exact: true, name: 'Home', component: Home},
];
