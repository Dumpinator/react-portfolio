import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Gallery.css';
import Project from '../Project/Project';

const Gallery = (props) => {

    const projects = props.data.map((item, i) => (
        <Project
            data={ item }
            dataLength={ i }
            key={ uuidv4() }
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