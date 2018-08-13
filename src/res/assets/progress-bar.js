import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/progress-bar.css';

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            percentage: this.props.percentage,
            pos: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.display());
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => this.display());
    }

    display() {
        let windowBottom = $(window).scrollTop() + $(window).height();
        let percent = this.state.percentage + '%';

        if ($('.bar').offset().top <= windowBottom) {
            this.setState({ pos: this.state.percentage });
            $('.fill').css('width', percent);
        }
    }


    render() {
        return (
            <div className='container'>
                <div className='name-div'><span className='skill-name'>{this.state.name}</span></div>
                <div className='bar-container'>
                    <div className='bar'>
                        <div className='fill'></div>
                    </div>
                    <div className='percentage-container'><span className='percentage'>{this.state.pos}%</span></div>
                </div>
            </div>
        );
    }
}
