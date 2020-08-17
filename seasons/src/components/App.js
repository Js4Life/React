import React from 'react';
import SearchBar from './searchBar';
import unsplash from '../api/unsplash'
import ImageList from './ImageList'

class Apps extends React.Component {

    state = { images : [] } // dont use because we using map down initiliaztn

    // froont of method name
  onSearchSubmit= async (term) => {

     console.log('term',term);

     //axios with await
      const response = await  unsplash.get('search/photos',{
            params: {query : term} ,    
        })

        console.log('response await',response.data.results);
        console.log(this)
        this.setState({ images : response.data.results });
        
        // promise
        // .then((response) => {
        //         console.log('car response',response.data.results)
        // } )


    }

    render(){
    return <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar 
            onSubmit={this.onSearchSubmit}
            guesswhomi="raghu"
            />
         <ImageList images={this.state.images} />
        </div>
    }
      
};

export default Apps;