import React from 'react';
import Description from '../components/home-comp/description';
import TopBar from '../components/home-comp/top-bar';

function HomePage(){
    return(
        <div>
            <TopBar />
            <h1 style={{textAlign: "center"}}>bgu</h1>
            <Description />
        </div>
    );
}

export default HomePage;