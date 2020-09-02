import React from 'react';
import Rollable from './Rollable';
import options from '../data/sorcerer-wildmagic.json';

class Sorcerer extends Rollable {
    constructor(props) {
        super(props);
        this.state = {
            result: "stuff"
        }
    }

    componentDidMount() {
        this.setState( {
            result: this.rollOnTable(options) 
        });
    }

    render() {
        return (
            <h4>{this.state.result}</h4>
        )
    }


}

export default Sorcerer;