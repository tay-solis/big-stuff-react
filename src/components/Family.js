import React, {Component} from 'react'
import Genus from './Genus'

class Family extends Component {
    constructor(){
        super();
        this.state={
            genera: [],
        }
    }
    componentDidMount(){
        let genera = [];
        for (let i = 0; i < this.props.family.genera.length; i++){
            console.log(this.props.family.genera[i])
            genera.push(<Genus key={i} genus={this.props.family.genera[i]}/>)
        }
        this.setState({
            genera
        })
    }
    render(){

        return(
            <div className="family">
                <h2>{this.props.family.name}</h2>
                {this.state.genera}
            </div>
        );
    }
}
export default Family