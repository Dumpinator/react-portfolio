import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './Tags.css'

const Tags = (props) => {
    const { data } = props
    const li = data && data.map( item => (
        <li key={ uuidv4() }>
            <a target="_blank"  
                href="https://developer.mozilla.org/fr/"
                rel="noopener noreferrer"
                className={`tag color-${item.toLowerCase()}`}>
                { item }
            </a>
        </li>
    ))
    return <ul>{ li }</ul>
}

export default Tags