import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './Modal';
// To connect redux with react
import { connect } from 'react-redux';


const Contact = ({ cards }) => {
    // console.log(props.cards);
    return(
        <div>
            {/* <Modal /> */}
            { cards.map(card => {
                return(
                  <div 
                    className='ui raised very padded text container segment'
                    style={{ marginTop: '80px' }}
                    key={card.id}
                  >
                    <Link to={`/${card.title}`} className='ui header'>
                        { card.title }
                    </Link>
                    <p>
                        { card.body }
                    </p>
                  </div>
                );
            })  }  
             {/* <div 
                className='ui raised very padded text container segment'
                style={{ marginTop: '80px' }}
            >
            <Link to='/alex' className='ui header'>
                Alex
            </Link>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including v
            </p>
            </div>

            <div 
                className='ui raised very padded text container segment'
                style={{ marginTop: '80px' }}
            >
            <Link to='/william' className='ui header'>
                William
            </Link>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including v
            </p>
            </div> */}
        </div>
       
    )
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards, 
    };
};

export default connect(mapStateToProps)(Contact);