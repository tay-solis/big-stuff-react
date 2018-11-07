import React, {Component} from 'react'
import Bug from './Bug'

class Bugs extends Component {
    render(){
        return(
            <section className="bugs">
                <h2>This is Bugs</h2>
                <Bug/>
            </section>
        );
    }
}
export default Bugs