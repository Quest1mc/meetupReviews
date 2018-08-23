import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      meetups: []
    }
  }

  onChange = e => {
    console.log(e.target.value)
    this.setState({ email: e.target.value })
  }

  componentDidMount = () => {
    // this.service.get
    // Todo: send the email in the body!!!!! not in the url!
    fetch('/api/meetups')
      .then(res => res.json())
      .then(meetups => {
        console.log(meetups)
        let ms = []
        meetups.forEach(meetup => {
          // if (meetup.personEmail === this.state.email) {
          const { name } = meetup
          ms.push(<li key={meetup.name}>{name}</li>)
          // }
        })

        this.setState({ meetups: ms })
      })
      .catch(err => console.error(err))
  }

  render() {
    const { meetups } = this.state
    if (meetups.length > 0) {
      console.log(meetups)
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Meetup extreme</h1>
          {/* here should probable go the person's info!  
              +
            {person.name} instead of Hasan
        */}
          <h3>Hey Hasan!</h3>
        </header>
        {/* <FindYourSelf/> */}
        <div className="main">
          <input
            type="email"
            onChange={this.onChange}
            value={this.state.email}
          />
          <button onClick={this.getMeetups}>Search</button>

          {/* this will be changed but it's good for now!!! */}
          <ul>{meetups}</ul>
        </div>
      </div>
    )
  }
}

export default App
