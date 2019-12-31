/**
 * displays a list of images to demonstrate skills.
 */

import React, { Component } from 'react';

export default class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = { images: this.addImages() };
    }

    /**
     * gets the list of images from a folder, and adds them to an img element.
     */
    addImages() {
        // get the the images in the technologies folder
        const images = require.context('../../images/technologies', false, /\.(png|PNG|jpg|JPG)$/);
        // list of img elements
        const imageElements = [];

        // add each image in the folder to an img element
        images.keys().map(images).forEach((image, index) => {
            imageElements.push(
                <img src={image} alt={`tech${index}`} key={`tech${index}`} />
            );
        });

        return imageElements;
    }

    render() {
        return (
            <div className='skills-container'>
                <h2>Technologies</h2>
                <div className='image-container'>
                    {this.state.images}
                </div>
            </div>
        );
    }
}
