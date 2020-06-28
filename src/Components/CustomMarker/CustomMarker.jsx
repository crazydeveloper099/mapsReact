import React from 'react';
import 'antd/dist/antd.css';
import './CustomMarker.css';
import { Popover } from 'antd';


const CustomMarker=(props)=>{


    const content = (
        <div>
          <p>Latitude: {props.lat}</p>
          <p>Longitude: {props.lng}</p>
        </div>
      );

    return(

         <Popover content={content} >
            <div class='pin bounce'></div>
            <div class='pulse'></div>
         </Popover>
    );
}

export default CustomMarker;
