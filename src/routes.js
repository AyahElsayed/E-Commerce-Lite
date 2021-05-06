import React from 'react';
import {Home} from './containters/Home';
import {Products} from './containters/Products';
import {About} from './containters/About';

export const routes = [
    {path: '/products', exact: true, name: 'Products', component: Products},
    {path: '/about', exact: true, name: 'About', component: About},
    {path: '/', exact: true, name: 'Home', component: Home},
];
