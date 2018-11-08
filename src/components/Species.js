import React, {Component} from 'react'

class Species extends Component {

    render(){

        return(
            <div className="species">
            <h3>{this.props.commonName}</h3>
            <h4>{this.props.genusName} {this.props.speciesName}</h4>
            </div>
        );
    }
}
export default Species