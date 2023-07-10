import React from 'react';
import Button from '@material-ui/core/Button';

const HomePage = ({ goBack }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Button variant="contained" color="secondary" onClick={goBack}>
        Go Back
      </Button>
    </div>
  );
};

export default HomePage;