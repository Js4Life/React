import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './spinner.js'
import Apps from './components/App';

// const App =() => {
// function based
// return <div>Latitude : </div>

// }


// class way extends and add render and return JSX

// eslint-disable-next-line 
class App extends React.Component { 

  state = {lat : null , errorMessage: '',time:''}



  render() {
    return (
      <div className="border red">
        {this.renderContent()}
        <div>The time is : {this.state.time}</div>
      </div>
  
    )
  }







  // first called
  // constructor() {
  //   console.log('constructor')
  //   // reference and override the base/parent react component
  //   // super(props);

  //   // this.state = {
  //   //   lat: null,
  //   //   message:''
  //   // };
  // }

  

  componentDidMount() {
    console.log('Component did mount...');
    setInterval(()=>{
      this.setState({time : new Date().toLocaleTimeString()})
    })
    window.navigator.geolocation.getCurrentPosition(
      (position)=> {
        console.log(position)
        // we called SetState!!!
        this.setState({lat: position.coords.latitude})
      },
      (err) => { console.log(err)
      this.setState({errorMessage:err.message})
      }
    );
  }

  componentDidUpdate(){
    console.log('Component did update')
  }


  renderContent() {
    console.log('render')
    if(this.state.errorMessage && !this.state.lat) {
    return <div>Error : {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

      return <Spinner message="Please accept location request"/>;
  }

  render_course1() {
    return (
      <div className="border red">
        {this.renderContent()}
        <div>The time is : {this.state.time}</div>
      </div>
  
    )
  }

}

ReactDOM.render(
    <Apps />,
  document.getElementById('root')
);


