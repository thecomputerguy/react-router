import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import fakeAuthService from '../../services/authservice/FakeAuthService'

const Logout = (props) => {
    
    const [loggedOut, setLoggedOut] = useState(false)
    
    function logout(){

        fakeAuthService.logout(() => setLoggedOut(true))
    }

    if(loggedOut){
        const to = {pathname : "/"}
        return <Redirect to={to} />
    }
    return (
        <div>
          <button onClick={logout}>Logout</button>  
        </div>
    )
}

export default Logout
