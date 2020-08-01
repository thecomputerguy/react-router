
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import fakeAuthService from '../services/authservice/FakeAuthService'

const PrivateRoute = ({component: Component, ...rest}) => {

    return (
        <div>
            <Route {...rest} render={(props) => fakeAuthService.isAuthenticated ? (<Component {...props}></Component>) : (<Redirect to={{pathname: "/login", state:{from: props.location}}}></Redirect>)}></Route>
        </div>
    )
}

export default PrivateRoute
