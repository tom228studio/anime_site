import React from 'react';

import "../styles/home.css";

const Home = () => {
    return (
        <div>
            <div className="header">
                <div className="header__img"></div>
                <div className="menu">
                    <div className="home_border">
                        <div className="menu__item home">
                            <span>Home</span>
                        </div>
                    </div>
                    <div className="menu__item">
                        <span>Connect</span>
                    </div>
                    <div className="menu__item">
                        <span>Sign Up</span>
                    </div>
                    <div className="menu__item">
                        <span>Sign In</span>
                    </div>
                </div>
            </div>
            <div className="entry">
                <h1>Welcome to Gates</h1>
                <span>Get the latest news on your favourite mangas, anime and manhwa around the world!</span>
                <div className="category">
                    <span className="category__item">Action</span>
                    <span className="category__item">Comedy</span>
                    <span className="category__item">Drama</span>
                    <span className="category__item">Military</span>
                    <span className="category__item">Fantasy</span>
                </div>
            </div>
        </div>
    );
};

export default Home;