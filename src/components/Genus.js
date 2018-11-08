import React, {Component} from 'react'
import Species from './Species'

class Genus extends Component {
    constructor(){
        super();
        this.state={
            species: []
        }
    }
    componentDidMount(){
        let species = [];
        for (let i = 0; i < this.props.genus.species.length; i++){
            let currentSpecies = this.props.genus.species[i];
            species.push(<li key={i}><Species 
                 
                commonName={currentSpecies.commonName}
                speciesName={currentSpecies.speciesName}
                genusName={currentSpecies.genusName}/></li>)
        }
        this.setState({
            species
        })
    }
    render(){

        return(
            <ul className="order">
                {this.state.species}
            </ul>
        );
    }
}
export default Genus