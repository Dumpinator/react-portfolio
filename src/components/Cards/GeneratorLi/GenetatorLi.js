import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const GeneratorLi = (props) => {
    //console.log(props);
    let li;
    if ( Array.isArray(props.data) ? props.data.includes('HTML') : '' ) {
        //console.log('je contient un langage')
        li = props.data.map( (item) => (
            <li key={uuidv4()}>
                <a target="_blank" href="https://developer.mozilla.org/fr/" rel="noopener noreferrer" className={`tag tag-${item.toLowerCase()}`}>{ item }</a>
            </li>
        ));
    } else {
        li = props.data.cssColor.map((item, i) => (
            <li key={uuidv4()}>
                <a target="_blank" rel="noopener noreferrer" href={ props.data.link[i] } className={`tag tag-${ item }`}>{ item.replace(/^./, item[0].toUpperCase()) }</a>
            </li>
        ));
    }
    return <ul>{ li }</ul>;
};

export default GeneratorLi;