import React, { Component } from 'react';
import ProgressBar from './progress-bar';
import '../styles/skills.css';
import data from '../data/skill-data';

let skillArray = [];

export default class Skills extends Component {
    
    componentWillMount() {
        this.pushElements();
    }
    
    pushElements() {
        let key = 0;
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                skillArray.push(<ProgressBar className='skill' name={data[i][j].name}
                    percentage={data[i][j].percentage} key={key} />);
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
