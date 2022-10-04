import React from 'react'

const Login = () => {
  return (
    <div class="cont">
      <form id="signinForm">
        <div class="form sign-in">
          <h2>Sign In</h2>
          <label>
            <span>Username</span>
            <input type="username" name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" />
          </label>
          <button type="submit" class="submit">Sign In</button>
          <p class="forgot-pass">Forgot Password ?</p>
        </div>
      </form>
      <form id="signupForm">
        <div class="sub-cont">
          <div class="img">
            <div class="img-text m-up">
              <h2>New here?</h2>
              <p>Sign up and discover a variety of upcoming events</p>
            </div>
            <div class="img-text m-in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div class="img-btn">
              <span class="m-up">Sign Up</span>
              <span class="m-in">Sign In</span>
            </div>
          </div>
          <div class="form sign-up">
            <h2>Sign Up</h2>
            <label>
              <span>Username</span>
              <input type="text" name="username" />
            </label>
            <label>
              <span>Email</span>
              <input type="username" name="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="password" />
            </label>
            <label>
              <span>Confirm Password</span>
              <input type="password" />
            </label>
            <button type="submit" class="submit">Sign Up Now</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login