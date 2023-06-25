import React from 'react';
import './Hemisphere.css';
import northernPic from './image/NorthernHemisphere.jpeg'
import southernPic from './image/SouthernHemisphere.jpeg'

const hemispereConfig = {
    Northern: {
        text: 'It is Northern Hemispere',
        picture: northernPic
    },
    Sourthern: {
        text: 'It is Sourthern Hemispere',
        picture: southernPic
    }
}

const HemispereDisplay = ({ latitude }) => {
    //console.log(latitude);
    const hemisphere = latitude > 0 ? 'Northern' : 'Sourthern';
    const { text, picture } = hemispereConfig[hemisphere];
    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={picture} alt="hemisphere pic"/>
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default HemispereDisplay;