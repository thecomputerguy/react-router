import React from 'react'
import {Link, Switch, NavLink, Route} from 'react-router-dom'

const Category = ({match}) => {
    return (
        <div>
            <p>Category</p>
            <nav>
                <ul>
                    <li><NavLink to={`${match.url}/shoes`}>Shoes</NavLink></li>
                    <li><NavLink to={`${match.url}/footwear`}>footwear</NavLink></li>
                    <li><NavLink to={`${match.url}/boots`}>boots</NavLink></li>    
                </ul>
            </nav> 
            <Switch>
                <Route path={`${match.path}/:name`} render={({match}) => (<div>{" "}<h3>{match.params.name}</h3></div>)}></Route>
           </Switch>
        </div>
    )
}

export default Category
