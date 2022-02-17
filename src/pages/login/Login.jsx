import React, { useState } from 'react'
import classes from "./login.module.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Login = () => {
  const [showPassword, setShowPassowrd] = useState(false);
  const toggleShowPassword = () => {
    setShowPassowrd(!showPassword)
  }
  return (
    <main className={classes.loginMain}>
      <div className={classes.loginHeadingDiv}>
        <h1>Login to ESMSystem</h1>
        <h5>Don't have an account? <span><a href="#">Contact Us</a></span></h5>
      </div>
      <div>
        <div className={classes.formDiv}>
          <form action="" className={classes.form} autoComplete='off'>
            <div>
              <div><span>User Id</span></div>
              <input type="text" name="userId" id="userId" placeholder='Enter User Id' />
            </div>
            <div>
              <div><span>Password</span></div>
              <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder='Enter Password' />
              {showPassword ? <VisibilityOffIcon className={classes.passwordIcon} onClick={toggleShowPassword} /> : <VisibilityIcon className={classes.passwordIcon} onClick={toggleShowPassword} />}
            </div>
            <div>
              <button type="submit">Login <ArrowForwardIcon /></button>
            </div>
            <div>
              <span><a href="#">Forgot your password/user id?</a></span>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login