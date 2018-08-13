import React, { Component } from 'react';
import ProgressBar from './progress-bar';
import '../styles/skills.css';
import data from '../data/skill-data';

let skillArray = [];
let key = 0;

export default class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animate: this.props.animate
        };
    }

    componentWillMount() {
        this.pushElements();
    }
    
    pushElements() {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                skillArray.push(<ProgressBar className='skill' name={data[i][j].name}
                    percentage={data[i][j].percentage} key={key} animate={this.state.animate} />);
                key++;
            }
        }
    }

    render() {
        return(
                <div className='skill-conatiner'>
                    {skillArray}
                </div>
                );
    }
}
