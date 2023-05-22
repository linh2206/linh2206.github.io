import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Signin extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value) // from elements property
    if(event.target.email.value === 'admin@gmail.com' && event.target.password.value === 'Admin@123'){
      localStorage.setItem('token', true)
      this.props.history.push('/dashboard')
    }else{  
      alert('Invalid Credentials')
    }
  }
  render() {
    return (
      <div>
        <div className="az-signin-wrapper">
          <div className="az-card-signin">
            <h1 className="az-logo">az<span>i</span>a</h1>
            <div className="az-signin-header">
              <h2>Welcome back!</h2>
              <h4>Please sign in to continue</h4>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name='email' placeholder="Enter your email" />
                </div>{/* form-group */}
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" name='password' placeholder="Enter your password" />
                </div>{/* form-group */}
                <button className="btn btn-az-primary btn-block">Sign In</button>
              </form>
            </div>{/* az-signin-header */}
            <div className="az-signin-footer">
              <p><a href="#/">Forgot password?</a></p>
              <p>Don't have an account? <Link to="/general-pages/signup">Create an Account</Link></p>
            </div>{/* az-signin-footer */}
          </div>{/* az-card-signin */}
        </div>{/* az-signin-wrapper */}
      </div>
    )
  }
}

export default Signin
