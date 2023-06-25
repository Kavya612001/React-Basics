import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//     return 'Hi, there Kavya'; 
// }

const App = () => {
    const buttonText = {text: 'Hello, Sumbit'};
    return(
        <div>
          <label for="name" className="label">Enter email</label>
          <input id="name" type="text"/>
          <button style={{backgroundColor: 'red', color: 'white'}}>
            { buttonText.text }
          </button>
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)