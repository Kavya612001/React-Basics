import React from "react";
import SearchInput from "./SearchInput";
import axios from 'axios';
import ImageList from "./ImageList";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { images: [] };

        // if onSearchSubmit is a arrow funtion, then this binding is not necessary
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }
    
    async onSearchSubmit(entry) {
        // console.log(entry);
        const response = await axios.get(`https://pixabay.com/api/?key=37198580-d64b777efb76b86c974e228a6&q=${entry}&image_type=photo`);
        // console.log(response.data.hits);
        this.setState({ images: response.data.hits })
    }

    render() {
        return(
            <div className="ui container" style={{marginTop: '30px'}} >
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            {/* We have { this.state.images.length } images */}
            <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;