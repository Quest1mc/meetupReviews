import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

        <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <button type="submit">Login</button>
        
        </div>
    )
  }
}
