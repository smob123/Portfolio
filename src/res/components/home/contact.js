/**
 * contact me section.
 */

import React, { Component } from 'react';
import GAEvent from '../general/GAEvents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

let submitBttn;
let contactForm;
let contactFormContent;

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    componentDidMount() {
        // get the list of elements to get their text content
        submitBttn = document.querySelector('#message-submit');
        contactForm = document.querySelector('.contact-content form');
        contactFormContent = document.querySelector('.contact-content');
    }



    update = e => {
        this.setState({
            [e.target.name]: e.target.value.toString()
        });
    }

    /**
     * handles clicking the submit button.
     */
    submit = e => {
        // do not refresh the page
        e.preventDefault();
        // send a GA event
        GAEvent('Email sent');
        // do not allow clicking on the button until the server responds
        submitBttn.style['cursor'] = 'progress';
        submitBttn.addEventListener('click', () => { return false });
        // send the data to the server
        this.sendData(JSON.stringify(this.state));
    }

    /**
     * send the form's text to the server
     * @param data user's information, and message
     */
    sendData(data) {
        fetch('https://m-node-server.herokuapp.com/send-email', {
            method: 'POST',
            body: data,
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((json) => {
                // if the server does not respond with success
                if (json.message !== 'ok') {
                    // show the server's error message, and re-enable the submit button
                    alert(json.message);
                    submitBttn.style['cursor'] = 'pointer';
                }
                else {
                    // otherwise hide the form, and display a confirmation message instead
                    contactForm.style['display'] = 'none';
                    contactFormContent.innerHTML = '<span>Your message has been submitted!</span>';
                }
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className='contact-content'>
                {/* section heading */}
                <h2>Contact</h2>
                {/* contact form */}
                <form>
                    <input placeholder='Name' aria-label='Name' name='name' value={this.state.name} onChange={e => this.update(e)} />
                    <input placeholder='E-mail' aria-label='E-mail' type='email' name='email' value={this.state.email} onChange={e => this.update(e)} />
                    <input placeholder='Subject' aria-label='Subject' name='subject' value={this.state.subject} onChange={e => this.update(e)} />
                    <textarea placeholder='Message' aria-label='Message' name='message' value={this.state.message} onChange={e => this.update(e)} />

                    <div id='message-submit' className='m-button' onClick={e => this.submit(e)}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                        <span>&nbsp;Submit</span>
                    </div>
                </form>
            </div>
        );
    }
}
