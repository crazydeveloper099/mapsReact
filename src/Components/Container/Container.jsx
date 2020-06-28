import React, { useState } from 'react';
import MapComponent from '../MapComponent/MapComponent';
import FindMeButton from '../FindMeButton/FindMeButton';
import PositionContext from '../Context/PositionContext';
import './Container.css';

const Container=()=>{

    const [position, updatePosition]=useState({
        lat:0.0,
        lng:0.0
      });

    const findMeClicked=(position => {
        updatePosition(position);
    });

    return(
        <div className="container">
            <PositionContext.Provider value={position}>
                <MapComponent onDrag={findMeClicked}/>
                <FindMeButton onClick={findMeClicked}/>
            </PositionContext.Provider>
        </div>
    )
}

export default Container;