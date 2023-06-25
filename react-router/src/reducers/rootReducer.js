import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const initialState = {
    cards: [
        {
            id: 1,
            title: 'Kavya',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including v"
        },
        {
            id: 2,
            title: 'Rajesh',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including v"
        },
        {
            id: 3,
            title: 'Sampath',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including v"
        },

    ],
    users: [],
};

const rootReducer = (state = initialState, action) => {
    // console.log(action);

    switch(action.type) {
        case 'DELETE_CARD':
            let newCard = state.cards.filter((card) => {
                return action.id !== card.id;
            });
            return {
                ...state,
                cards: newCard
            }
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload
            }
        default: 
            return state;
    }

    return state;
};

export default rootReducer;