import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './images/pic-1.jpg';
import profile2 from './images/pic-2.jpg';
import profile3 from './images/pic-3.jpg';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <div>
                    Hello, from div.
                </div>
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Meenu' 
                    date='Today at 5:00PM'
                    text='Its amazing'
                    picture={ profile1 } />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Sanju' 
                    date='Today at 6:00PM'
                    text='good'
                    picture={ profile2 } />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Raju' 
                    date='Today at 7:00PM'
                    text='great job'
                    picture={ profile3 } />
            </UserCard>
           
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)