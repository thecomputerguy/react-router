import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import fakeAuthService from '../../services/authservice/FakeAuthService'

const Login = (props) => {
    const {from} = props.location.state || {from: {pathname: "/"}}
    const [redirectToReferrer, setRedirectToReferrer] = useState(false)
    
    function login(){
        fakeAuthService.authenticate(() => {setRedirectToReferrer(true)})
    }

    if (redirectToReferrer) {
        return <Redirect to={from} />
    }

    return (
        <div>
            <p>You must be logged in to view this section.</p>
            <button onClick={login}>Login</button>
            
        </div>
    )
}

export default Login
