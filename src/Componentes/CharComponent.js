import React from 'react';

import './CharComponent.css';


    const CharComponent = ( props ) => {
        return (
            <div className="CharComponent">
                <p  onClick={props.click}>{props.valor} </p>
            </div>
        )
    };


export default CharComponent;