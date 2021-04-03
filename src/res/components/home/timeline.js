/**
 * displays a list of elements in a timeline.
 */

import React, { useEffect, useState } from 'react';

export default function Timeline(props) {
    const [timelineItems, setTimeLineItems] = useState([]);

    useEffect(() => {
        setTimeLineItems(getItems());
    }, []);

    /**
     * add list of items to the section
     */
    const getItems = () => {
        const propItems = props.items;
        const items = []

        propItems.forEach((item, index) => {
            const position = index % 2 === 0 ? 'left' : 'right';

            items.push(
                <div key={`${Date.now()}_${index * index}`}>
                    <div className='circle'></div>
                    <div className={`card mb-6 ${position}`} key={`${item.title}${index}`}>
                        <div className='card-header'>
                            {/* the item's date */}
                            <span>
                                {item.date}
                            </span>
                        </div>

                        <div className='card-body'>
                            <div className='card-title'>
                                {/* the item's title */}
                                <span>
                                    {item.title}
                                </span>
                            </div>

                            {/* the item's description */}
                            <div>
                                <span className='light-text'>{item.desc}</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return items;
    }

    return (
        <div className='timeline-container'>
            <h3>{props.title}</h3>
            {/* list of items in the timeline */}
            <div className='timeline'>
                {timelineItems}
            </div>
        </div>
    );
}