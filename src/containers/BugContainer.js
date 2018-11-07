import React, {Component} from 'react'
import Bugs from '../components/Bugs'

class BugContainer extends Component {
    render(){
        return(
            <main className="bugContainer">
                <h1>This is the BugContainer</h1>
                <Bugs/>
            </main>
        );
    }
}
export default BugContainer