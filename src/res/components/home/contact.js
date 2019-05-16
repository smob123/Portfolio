import React, { Component } from 'react';
import GAEvent from '../general/GAEvents';

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
        submitBttn = document.querySelector('#message-submit');
        contactForm = document.querySelector('#contact-content form');
        contactFormContent = document.querySelector('#contact-content');
    }



    update = e => {
        this.setState({
            [e.target.name]: e.target.value.toString()
        });
    }

    submit = e => {
        e.preventDefault();
        GAEvent('Email sent');
        submitBttn.style['cursor'] = 'progress';
        submitBttn.addEventListener('click', () => { return false });
        this.sendData(JSON.stringify(this.state));
    }

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
                if (json.message !== 'ok') {
                    alert(json.message);
                    submitBttn.style['cursor'] = 'pointer';
                }
                else {
                    contactForm.style['display'] = 'none';
                    contactFormContent.innerHTML = '<span>Your message has been submitted!</span>';
                }
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <form>
                <input placeholder='Name' name='name' value={this.state.name} onChange={e => this.update(e)} />
                <input placeholder='E-mail' type='email' name='email' value={this.state.email} onChange={e => this.update(e)} />
                <input placeholder='Subject' name='subject' value={this.state.subject} onChange={e => this.update(e)} />
                <textarea placeholder='Message' name='message' value={this.state.message} onChange={e => this.update(e)} />

                <button id='message-submit' onClick={e => this.submit(e)}>Submit</button>
            </form>
        );
    }
}
