import React from 'react';
import Button from '@material-ui/core/Button';
import Slides from './Slides';
import "./HomePage.css"

const HomePage = ({ goBack }) => {
  return (
    <div className='container' style={{fontFamily:"DebroseeFont"}}>
      <div className = "homePage">
      <h1>WELCOME</h1>
      <p>Check Out Our Gallery!</p>
      <Button variant="contained" color="secondary"  type="submit" onClick={goBack}>
        Go Back TO Login
      </Button>
      </div>
    <div className="homePageContainer">
      <Slides />
    </div>
    </div>
  );
};

export default HomePage;