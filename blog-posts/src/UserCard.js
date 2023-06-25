import React from 'react';

const UserCard = (props) => {
    console.log(props); // to check the object 
    return(
        <div className='ui card'>
            <div className='content'>
                <div className='header'>{ props.children }</div>
            </div>
            <div className='ui bottom button'>
                <i className='add icon'></i>
                Add friend
            </div>
        </div>
    )
}

export default UserCard;