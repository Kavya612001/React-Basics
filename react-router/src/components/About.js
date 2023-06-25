import React from 'react';
import './Modal.css';

const About = () => {
    return(
        <div>
            <div className='wrapper'>
                <div className='modal'>
                    <div className='modal-content'>
                        <h3>I am a modal</h3>
                    </div>
                </div>
            </div>
            <div 
                className='ui raised very padded text container segment'
                style={{ marginTop: '80px' }}
            >
                <h3 className='ui header'>About</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including v</p>
            </div>
        </div>
    )
}

export default About;