import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
    render(){
        return(
            <nav>
                <h1>This is the Nav</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bugs">Bugs</Link></li>
                    <li><Link to="/about">About</Link></li>    
                </ul>
            </nav>
        );
    }
}
export default Nav