import React from 'react';
import ReactDOM from 'react-dom';
import HemispereDisplay from './HemisphereDisplay'

// Function based component

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position), 
//         (error) => console.log(error)
//     );
//     return(
//         <div>
//            latitude: 
//         </div>
//     )
// }


// Class Based component
class App extends React.Component {

    //not a mandatory function - 1st function to be called when App component is created
    // 
    // constructor(props) {
    //     super(props);

    //     this.state = {latitude: null, errorMessage: ''}
      
    // }

    state = { latitude: null, errorMessage: '' } // Its not mandatory to intialize the state inside the constructor

    // caled once when the component is rendered 
    componentDidMount() {
        console.log('componentDidMount');
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude })
            },
            (error) => {
                this.setState({errorMessage: error.message})
            }
        );
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    //mandatory function
    render() {
            if(this.state.errorMessage && !this.state.latitude) {
                return <div> {this.state.errorMessage} </div>
            } 
            if(this.state.latitude && !this.state.errorMessage) {
                return <div> <HemispereDisplay latitude={this.state.latitude}/> </div>
            } 
            // intially this will be displayed, since it takes some time to get the response
            else {
                return <div>Loading...</div>
            }

       
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)