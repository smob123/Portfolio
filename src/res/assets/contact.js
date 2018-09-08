import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <input placeholder='Name' />
                <input placeholder='E-mail' />
                <input placeholder='Subject' />
                <textarea placeholder='Message' />

                <button id='message-submit'>Submit</button>
            </div>
        );
    }
}
