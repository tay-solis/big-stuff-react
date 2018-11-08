import React, {Component} from 'react'
import Order from '../components/Order'
import axios from 'axios'
import { bugStuffAPIUrl } from '../config/constants'

class BugContainer extends Component {
    constructor(){
        super();
        this.state ={
            orders: [],
            currentView: 'order',
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        axios.get(bugStuffAPIUrl)
        .then((res)=>{
            let orders = [];
            for(let i = 0; i < res.data.length; i++){
                orders.push(<Order key={i} name={res.data[i].name} order = {res.data[i]}/>)
            }
            this.setState({
                orders
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <main className="bugContainer">
                <h1>Insects</h1>
                {this.state.orders}
            </main>
        );
    }
}
export default BugContainer