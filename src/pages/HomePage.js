import React from 'react';
import Description from '../components/home-comp/protest-des';
import TopBar from '../components/home-comp/top-bar';

function HomePage(){
    return(
        <div>
            <TopBar />
            <h1>bgu</h1>
            <Description />
        </div>
    );
}

export default HomePage;