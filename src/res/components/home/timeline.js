/**
 * displays a list of elements in a timeline.
 */

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export default class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = { items: this.addItems() };
    }

    /**
     * add list of items to the section
     */
    addItems() {
        const propItems = this.props.items;
        const items = []

        propItems.forEach((item, index) => {
            items.push(
                <div className='timeline-item' key={`${item.title}${index}`}>
                    <div className='content'>
                        <div className='date-container'>
                            {/* the item's date */}
                            <span>
                                <span className='secondary-color'>&#9658; &nbsp;</span>
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                &nbsp;
                                {item.date}
                            </span>
                        </div>

                        <div className='title-container'>
                            {/* the item's title */}
                            <span>
                                {item.title}
                            </span>
                        </div>

                        {/* the item's description */}
                        <div className='desc-container'>
                            <span>{item.desc}</span>
                        </div>
                    </div>
                </div>
            );
        });

        return items;
    }

    render() {
        return (
            <div>
                {/* timeline's title */}
                <h2>{this.props.title}</h2>
                {/* list of items in the timeline */}
                <div className='timeline'>
                    {this.state.items}
                </div>
            </div>
        );
    }
}