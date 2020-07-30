import React from 'react';
import '../Section/Section.css'

import TypedComponent from '../TypedComponent/TypedComponent';
const Section = ( props ) => {
    //console.log(props)
    return (
        <div className="section" id={ props.id }>
            <TypedComponent data={ props.data } />
        </div>
    )
}

export default Section;