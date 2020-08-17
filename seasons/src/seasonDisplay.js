import './seasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer : {
        text : "Let's Hit the beach",
        iconName:'sun'
    },
    winter:{
        text : "Burr,it is chilly",
        iconName:'snowflake'
    }
}

const getSeason = (lat,month) => {
  
    if(month > 2 && month < 9) {
       return lat > 0 ? 'summer': 'winter';     
    } else {
        return lat > 0  ? 'winter':'summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat,new Date().getMonth());

    // const text = season === 'winter' ? 'Burr,it is chilly': 'Lets hit the breach';
    // const icon = season === 'winter' ? 'snowflake':'sun';

    const {text,iconName} = seasonConfig[season]


    console.log(season);
    console.log('props season',props.lat);

    return (
        <div className={`season-display ${season}`}>
           <i className={`massive icon-left ${iconName} icon`} />
            <h1>{text}</h1>
             <i className={`massive icon-right ${iconName} icon`} />
        </div>
     );
  
};

export default SeasonDisplay;