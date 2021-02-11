import React, { useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Gallery.css';
import Cards from '../Cards/Cards';

const Gallery = (props) => {

    let galleryConatinerRef = useRef(null)

    useEffect(() => {
        return () => {};
    }, []);

    
    const projects = props.data.map((item, i) => (
        <Cards
            data={ item }
            dataLength={ i+1 }
            key={ uuidv4() }
            onToggleClick={ props.onToggleClick }
        />
    ));

    return (
        <div className="container">
            <div className="portfolio" id="js-portfolio" ref={ galleryConatinerRef }>
                { projects }
            </div>
        </div>
    )
}

export default Gallery;