import React from 'react';
import uniqid from 'uniqid';

const GeneratorLi = (props) => {
    let li;
    if ( Array.isArray(props.data) ? props.data.includes('HTML') : '' ) {
        //console.log('je contient un langage')
        li = props.data.map( (item) => (
            <li key={uniqid()}>
                <a target="_blank" href="https://developer.mozilla.org/fr/" rel="noopener noreferrer" className={`tag tag-${item.toLowerCase()}`}>{ item }</a>
            </li>
        ));
    } else {
        li = props.data.cssColor.map((item, i) => (
            <li key={uniqid()}>
                <a target="_blank" rel="noopener noreferrer" href={ props.data.link[i] } className={`tag tag-${ item }`}>{ item.replace(/^./, item[0].toUpperCase()) }</a>
            </li>
        ));
    }
    return <ul>{ li }</ul>;
};

export default GeneratorLi;