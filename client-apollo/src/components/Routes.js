import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Signup from './auth/Signup'
import Signin from './auth/Signin'
// import App from './App'
class Routes extends Component {
    render() {
        return (
            <div>
                <Route  path='/signup' component ={Signup} />
                <Route  path='/signin' component ={Signin} />
            </div>
        )
    }
}
export default Routes