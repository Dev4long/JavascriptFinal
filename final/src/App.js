import './App.css';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from '@material-ui/core';
import { useState } from 'react';
import Carousel from './Carousel';
import HomePage from './HomePage';

function App() {
  const [signUp, toggleSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const switchSignUp = () => {
    toggleSignUp(!signUp);
    setErrors({}); // Reset errors when switching between sign-in and sign-up
    setShowSuccess(false);
  };

  const validateEmail = (email) => {
    // Simple email validation using regular expression
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password validation: at least one symbol, one number, and one uppercase letter
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleGoBack = () => {
    setShowSuccess(false);
  };

  const handleShowPassword = (e) => {
    setShowPassword(e.target.checked);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};

    if (!validateEmail(email)) {
      validationErrors.email = 'Invalid email address';
    }

    if (!validatePassword(password)) {
      validationErrors.password =
        'Password must contain at least one symbol, one number, and one uppercase letter';
    }

    setErrors(validationErrors);

    // If there are no errors, perform sign-in logic
    if (Object.keys(validationErrors).length === 0) {
      // Perform sign-in logic here
      setShowSuccess(true);
      setEmail('');
      setPassword('');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};

    if (!validateEmail(email)) {
      validationErrors.email = 'Invalid email address';
    }

    if (!validatePassword(password)) {
      validationErrors.password =
        'Password must contain at least one symbol, one number, and one uppercase letter';
    }

    setErrors(validationErrors);

    // If there are no errors, perform sign-up logic
    if (Object.keys(validationErrors).length === 0) {
      // Perform sign-up logic here
      setShowSuccess(true);
      setEmail('');
      setPassword('');
    }
  };


  if (showSuccess) {
    return <HomePage goBack={handleGoBack} />; // Render the home page when showSuccess is true
  }  

  return (
    <div className="LoginContainer">
      <div className="carouselContainer">
      <div className = "carousel">
      <div className="star" style={{ top: '21%', left: '40%' }}></div>
      <div className="star" style={{ top: '22%', left: '70%' }}></div>
      <div className="star" style={{ top: '23%', left: '30%' }}></div>
      <div className="star" style={{ top: '19%', left: '35%' }}></div>
      <div className="star" style={{ top: '18%', left: '65%' }}></div>
      <div className="star" style={{ top: '17%', left: '25%' }}></div>
      <div className="star" style={{ top: '16%', left: '73%' }}></div>
      <div className="star" style={{ top: '15%', left: '68%' }}></div>
      <div className="star" style={{ top: '14%', left: '39%' }}></div>
      <div className="star" style={{ bottom: '4%', left: '39%' }}></div>
      <div className="star" style={{ bottom: '5%', left: '45%' }}></div>
      <div className="star" style={{ bottom: '2%', left: '49%' }}></div>
      <div className="star" style={{ bottom: '3%', left: '54%' }}></div>
      <div className="star" style={{ bottom: '6%', left: '59%' }}></div>
      <div className="star" style={{ bottom: '50%', left: '5%' }}></div>
      <div className="star" style={{ bottom: '44%', left: '2%' }}></div>
      <div className="star" style={{ bottom: '39%', left: '4%' }}></div>
      <div className="star" style={{ bottom: '44%', left: '98%' }}></div>
      <div className="star" style={{ bottom: '40%', left: '94%' }}></div>
      <div className="star" style={{ bottom: '34%', left: '95%' }}></div>
      <div className="star" style={{ bottom: '2%', left: '97%' }}></div>
      <div className="star" style={{ bottom: '2%', left: '3%' }}></div>
      <div className="star" style={{ top: '5%', left: '97%' }}></div>
      <div className="star" style={{ top: '5%', left: '3%' }}></div>
      <h1>GRAF'S CALLING</h1>
      <Carousel />
      </div>
      </div>

      <div className="formContainer">
        <div className="topBanner">GRAF'S CALLING</div>

        {!signUp ? (
          <div className="LoginForm">
            <div>
              <LockOutlinedIcon style={{ color: 'white', background: 'red', marginBottom: '20px', fontSize: '30px' }} />
            </div>
            LOGIN
            <form onSubmit={handleSignIn}>
              <div>
                <TextField 
                  label="Email address *"
                  variant="outlined"
                  margin="normal"
                  color="secondary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors.email ? true : false}
                  helperText={errors.email}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <TextField
                  label="Password *"
                  variant="outlined"
                  margin="normal"
                  color="secondary"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={errors.password ? true : false}
                  helperText={errors.password}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label>
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={handleShowPassword}
                  />
                    SHOW PASSWORD
                </label>
              </div>
              <Button style={{ marginBottom: '20px'}} variant="contained" color="secondary" type="submit">
                Sign in
              </Button>
              <div onClick={switchSignUp}>
                <Link style={{fontFamily:"D5Font"}} href="#" variant="body2">
                  DON'T HAVE AN ACCOUNT? SIGN UP
                </Link>
              </div>
            </form>
          </div>
        ) : (
          <div className="LoginForm">
            <div>
              <LockOutlinedIcon style={{ color: 'white', background: 'red', marginBottom: '20px', fontSize: '30px' }} />
            </div>
            SIGN UP
            <form onSubmit={handleSignUp}>
              <div>
                <TextField
                  label="Email address *"
                  variant="outlined"
                  margin="normal"
                  color="secondary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors.email ? true : false}
                  helperText={errors.email}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <TextField
                  label="Password *"
                  variant="outlined"
                  margin="normal"
                  color="secondary"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={errors.password ? true : false}
                  helperText={errors.password}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label>
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={handleShowPassword}
                  />
                    SHOW PASSWORD
                </label>
              </div>
              <Button style={{ marginBottom: '20px' }} variant="contained" color="secondary" type="submit">
                Register
              </Button>
              <div onClick={switchSignUp}>
                <Link style={{fontFamily:"D5Font"}} href="#" variant="body2">
                  ALREADY HAVE AN ACCOUNT? SIGN IN
                </Link>
              </div>
            </form>
          </div>
        )}
        {/* {showSuccess && <Home />}  */}
      </div>
    </div>
  );
}

export default App;