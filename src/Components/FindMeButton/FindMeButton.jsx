import React from 'react';
import { Button } from 'antd';
import './FindMeComponent.css';

const FindMeButton=(props)=>{


    const getLocation=()=>{
        navigator.geolocation.getCurrentPosition(position=>{
                       let currentPosition={
                             lat:position.coords.latitude,
                             lng:position.coords.longitude}
        props.onClick(currentPosition)})
    }

    return(
        <Button 
        type="primary" 
        shape="round" 
        onClick={getLocation} 
        size="large"
        className="findMeButton">Find Me!</Button>
    );
}

export default FindMeButton;