import React from "react";

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export const routes = [
    {path: '/users', exact: true, name: 'Users', component: Users},
    {path: '/about', exact: true, name: 'About', component: About},
    {path: '/', exact: true, name: 'Home', component: Home},
];
