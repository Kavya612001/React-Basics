import React from 'react';

class SearchInput extends React.Component {
    
    constructor(props) {
        super(props);
        this.state =  { entry: '' };

        // value of this will be equal to the instance of the SearchInput
        //this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    
    // with arrow functions binding this is not necessary
    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
        //console.log(this.state.entry);
    }
    
    render() {
        return(
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input 
                                type='text' 
                                placeholder='Search...' 
                                onChange={(event) => this.setState({ entry: event.target.value })}
                                value={this.state.entry}
                            />
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;