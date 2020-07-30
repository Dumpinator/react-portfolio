import React from 'react';
import Typed from 'react-typed';
import '../TypedComponent/TypedComponent.css';

const TypedComponent = ( props ) => {
    return (
        <div className="typed-div">
            <Typed
                strings={ props.data }
                typeSpeed={ 40 }
                backSpeed={ 50 }
                loop >
            </Typed>
        </div>
    );
}

export default TypedComponent;