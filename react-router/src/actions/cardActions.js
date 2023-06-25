import axios from 'axios';

// action to delete a card
export const deleteCard = (id) => {
    return {
        type: 'DELETE_CARD',
        id
    };
};

// return an javascript function
export const fetchUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => {
                dispatch({
                    type: 'FETCH_USERS',
                    payload: data
                });
            });
    }
}