import React, {Component} from 'react'
import Family from './Family'

class Order extends Component {
    constructor(){
        super();
        this.state={
            name: "Unknown",
            families: [],
        }
    }
    componentDidMount(){
        let name = this.props.name;
        let families = [];
        for (let i = 0; i < this.props.order.families.length; i++){
            families.push(<Family key={i} family={this.props.order.families[i]}/>)
        }
        this.setState({
            name,
            families,
        })
    }
    render(){
        
        return(
            <section className="bugs">
                <h2>Order {this.state.name}</h2>
                {this.state.families}
            </section>
        );
    }
}
export default Order