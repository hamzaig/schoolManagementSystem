import React, { useState } from 'react'
import classes from "./login.module.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [showPassword, setShowPassowrd] = useState(false);
  const toggleShowPassword = () => {
    setShowPassowrd(!showPassword)
  }
  return (
    <main className={classes.loginMain}>
      <div className={classes.loginHeadingDiv}>
        <h1>Login to ESMSystem</h1>
        <p>Don't have an account? <span><a href="#">Contact Us</a></span></p>
      </div>
      <div>
        <div className={classes.formDiv}>
          <form action="" className={classes.form} autoComplete='off'>
            <div className={classes.userDiv}>
              <div><span>User Id</span></div>
              <input className={classes.userId} type="text" name="userId" id="userId" placeholder='Enter User Id' />
            </div>
            <div className={classes.passwordDiv}>
              <div><span>Password</span></div>
              <input className={classes.password} type={showPassword ? "text" : "password"} name="password" id="password" placeholder='Enter Password' />
              {showPassword ? <VisibilityOffIcon className={classes.passwordIcon} onClick={toggleShowPassword} /> : <VisibilityIcon className={classes.passwordIcon} onClick={toggleShowPassword} />}
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
            <div className={classes.forgot}>
              <span><a href="#">Forgot your password/user id?</a></span>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login