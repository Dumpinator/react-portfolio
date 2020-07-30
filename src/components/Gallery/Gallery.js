import React from 'react';
import './Gallery.css';
import uniqid from 'uniqid';
import Project from '../Project/Project';

const Gallery = (props) => {
    //console.log('Gallery', props);

    const projects = props.data.map((item, i) => (
        <Project
            data={ item }
            dataLength={ i }
            key={ uniqid() }
            onToggleClick={ props.onToggleClick }
        />
    ));

    return (
        <div className="container">
            <div className="portfolio" id="js-portfolio">
                { projects }
            </div>
        </div>
    )
}

export default Gallery;