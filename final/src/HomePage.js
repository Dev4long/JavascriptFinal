import React from 'react';
import Button from '@material-ui/core/Button';
import Slides from './Slides';
import "./HomePage.css"

const HomePage = ({ goBack }) => {
  return (
    <div className='container'>
      <div className = "homePage">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Button variant="contained" color="secondary"  type="submit" onClick={goBack}>
        Go Back
      </Button>
      </div>
    <div className="homePageContainer">
      <Slides />
    </div>
    </div>
  );
};

export default HomePage;