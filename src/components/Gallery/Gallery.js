import React from 'react'
import './Gallery.css'
import Cards from '../Cards/Cards'

const Gallery = ({ data, onToggleClick }) => {

    return (
        <div className="container">
            <div className="portfolio" id="js-portfolio">
                { data && data.map((item, i) => (
                <Cards
                    key={ item.id }
                    data={ item }
                    dataLength={ i+1 }
                    onToggleClick={ onToggleClick } />
                ))}
            </div>
        </div>
    )
}

export default Gallery