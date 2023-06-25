import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteCard, fetchUsers } from '../actions/cardActions';

const Card = (props) => {
    const card = useSelector((state) => {
        let user = props.match.params.user;
        return state.cards.find((card) => card.title === user);
    });

    const dispatch = useDispatch();
    const history = useHistory();
    
    const { title, body } = card;

    const users = useSelector((state) => {
        return state.users;
    });

    // console.log(users);

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    const onButtonClick = () => {
        let id = card.id
        dispatch({ type: 'DELETE_CARD', id });
        history.push('/contact');
    }

    return (
       users.map((user) => {
        return(
            <div 
            className='ui raised very padded text container segment'
            style={{ marginTop: '80px' }}
            >
            <h3 className='ui header'>{user.name}</h3>
            <p>{user.email}</p>
            <button className='ui primary right floated button' onClick={onButtonClick}>Delete</button>
        </div>
        )
       })
    )
};

export default Card;