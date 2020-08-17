// import the React and ReactDom libs

import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText(){
  return 'Click on Me!' 
}

// create a react component

const App = () => {

    const buttonText = {text: "save me"};
    const labelText='Enter name :';
    const customStyle={backgroundColor:'blue',color:'white'}

  return (
    <div>
    <label className="label" htmlFor="name">{labelText}</label>
    <input id="name" type="text"/>
    <button style={customStyle}>
      {buttonText.text}
      </button>
  </div>
  );

};

// take this to look one screen

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);















// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
