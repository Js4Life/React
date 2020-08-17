import React from 'react';


class SearchBar extends React.Component {

    state = {term : ''};

    onInputChange(event) {
        console.log('event',event.target.value)
    }

    onInputClick() {
        console.log('Input was clicked')
    }

    //onFormSubmit = (event)=> {
    // Use fat arrow function to avoid undefined issue OR use in jsx

    onFormSubmit(event){
        event.preventDefault();

        console.log(this.state.term)
        // class way this.prop
        this.props.onSubmit(this.state.term)

    }

    render(){
        return (
        <div className="ui segment">

            <form 
            onSubmit={(event)=>this.onFormSubmit(event)}
            className="ui form">

                <div className="field">
                    <label>Image Search</label>
                      <input 
                      type="text" 
                      onChange={(e) => this.setState({term : e.target.value})}
                      value={this.state.term}
                      />
                </div>
              

            </form>
        </div>
        );
    }
}

export default SearchBar;