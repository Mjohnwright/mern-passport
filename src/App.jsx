import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";

//Components
import NavBar from "./components/NavBar";

// API
import API from "./utils/API/API"

import axios from 'axios'
class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
    	this._login = this._login.bind(this)
  }

  componentDidMount(){
    axios.get('/auth/authtest/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
        console.log('THERE IS A USER')
        console.log(response.data.user._id);
        API.getUser(response.data.user._id)
          .then( res => {
            this.setState({
              loggedIn: true,
              user: res.data.username
            })
          });
        // console.log(currentUser);

			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
  }

  _logout() {
    // event.preventDefault();
    this.setState({
      loggedIn:false,
      user:null
    })
		console.log('logging out')
	}

	_login() {
    this.setState({
      loggedIn:true,
    })
    console.log("the current user that is logged in  is: " + this.state.user);
	};
  
  render() {
		return (
      <Router>
        <div>
          <NavBar _logout={this._logout} _login={this._login} currentUser = {this.state.user} loggedIn={this.state.loggedIn} />
          
            <Route exact path="/" component={Home} />

          
        </div>
      </Router>
      );
    }
}

export default App;




// import React, { Component } from 'react'
// import axios from 'axios'
// import { Route, Link } from 'react-router-dom'
// import './App.css'
// import LoginForm from './components/Login/LoginForm'
// import SignupForm from './components/SignupForm'
// import Header from './components/Header'
// import Home from './components/Home'

// const DisplayLinks = props => {
// 	if (props.loggedIn) {
// 		return (
// 			<nav className="navbar">
// 				<ul className="nav">
// 					<li className="nav-item">
// 						<Link to="/" className="nav-link">
// 							Home
// 						</Link>
// 					</li>
// 					<li>
// 						<Link to="#" className="nav-link" onClick={props._logout}>
// 							Logout
// 						</Link>
// 					</li>
// 				</ul>
// 			</nav>
// 		)
// 	} else {
// 		return (
// 			<nav className="navbar">
// 				<ul className="nav">
// 					<li className="nav-item">
// 						<Link to="/" className="nav-link">
// 							Home
// 						</Link>
// 					</li>
// 					<li className="nav-item">
// 						<Link to="/login" className="nav-link">
// 							login
// 						</Link>
// 					</li>
// 					<li className="nav-item">
// 						<Link to="/signup" className="nav-link">
// 							sign up
// 						</Link>
// 					</li>
// 				</ul>
// 			</nav>
// 		)
// 	}
// }

// class App extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			loggedIn: false,
// 			user: null
// 		}
// 		this._logout = this._logout.bind(this)
// 		this._login = this._login.bind(this)
// 	}
// 	componentDidMount() {
// 		axios.get('/auth/user').then(response => {
// 			console.log(response.data)
// 			if (!!response.data.user) {
// 				console.log('THERE IS A USER')
// 				this.setState({
// 					loggedIn: true,
// 					user: response.data.user
// 				})
// 			} else {
// 				this.setState({
// 					loggedIn: false,
// 					user: null
// 				})
// 			}
// 		})
// 	}

// 	_logout(event) {
// 		event.preventDefault()
// 		console.log('logging out')
// 		axios.post('/auth/logout').then(response => {
// 			console.log(response.data)
// 			if (response.status === 200) {
// 				this.setState({
// 					loggedIn: false,
// 					user: null
// 				})
// 			}
// 		})
// 	}

// 	_login(username, password) {
// 		axios
// 			.post('/auth/login', {
// 				username,
// 				password
// 			})
// 			.then(response => {
// 				console.log(response)
// 				if (response.status === 200) {
// 					// update the state
// 					this.setState({
// 						loggedIn: true,
// 						user: response.data.user
// 					})
// 				}
// 			})
// 	}

// 	render() {
// 		return (
// 			<div className="App">
// 				<h1>MowMe</h1>
// 				<Header user={this.state.user} />
// 				{/* LINKS to our different 'pages' */}
// 				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
// 				{/*  ROUTES */}
// 				{/* <Route exact path="/" component={Home} /> */}
// 				<Route exact path="/" render={() => <Home user={this.state.user} />} />
// 				<Route
// 					exact
// 					path="/login"
// 					render={() =>
// 						<LoginForm
// 							_login={this._login}
// 						/>}
// 				/>
// 				<Route exact path="/signup" component={SignupForm} />
// 				{/* <LoginForm _login={this._login} /> */}
// 			</div>
// 		)
// 	}
// }

// export default App
