import React, { useRef } from 'react';
import { FaGithub, FaArrowCircleUp } from 'react-icons/fa';
import './Cards.css';
import TagGenerator from './GeneratorLi/GenetatorLi';

const Project = ( props ) => {
    //console.log('Project', props)
    let projectRef = useRef(null)
    let projectContainerRef = useRef(null)
    
    const handleMouseMove = (event) => {
        //event.stopPropagation();
        let zoneX = window.innerWidth / 3 // calculer le nbr de colonnes
        let zoneY = projectContainerRef.current.parentElement.clientHeight / 2 // calculer le nbr de lignes
        let xAxis = ( (window.innerWidth / 2) - event.pageX) / 10
        let yAxis = ( (window.innerHeight / 2) - event.pageY) / 10

        console.log(event.pageY)
         
        if (event.pageX <= zoneX) {
            console.log("ZONE 1")
            projectRef.current.style.transform = `
                rotateY(${xAxis-(zoneX/10)}deg)
                rotateX(${ event.pageY > zoneY ? yAxis+(zoneY/10) : yAxis }deg)
            `
        }

        if (event.pageX >= zoneX && event.pageX <= zoneX*2) {
            console.log("ZONE 2")
            projectRef.current.style.transform = `
                rotateY(${xAxis}deg)
                rotateX(${ event.pageY > zoneY ? yAxis+(zoneY/10) : yAxis }deg)
            `
        }

        if (event.pageX >= zoneX*2) {
            console.log("ZONE 3")
            projectRef.current.style.transform = `
                rotateY(${xAxis+(zoneX/10)}deg)
                rotateX(${ event.pageY > zoneY ? yAxis+(zoneY/10) : yAxis }deg)
            `
        }
    };
/*
    React.useEffect(() => {
        //window.addEventListener('mouse', handleMouseOver);
        // cleanup this component
        return () => {
        //window.removeEventListener('keydown', handleMouseOver);
        };
    }, []);
*/
    const projectDescriptionDiv = (props) => {
        //console.log(props.data.show)
        // return descripton first
        return (
            <div className="project_description js-body" >
                <h3>{ props.data.titleDescription}</h3>
                <p>{ props.data.paraDescription }</p>
                <div className="project_tag">
                    <TagGenerator data={ props.data.linkLanguage } />
                </div>
                <div className="link">
                    <div className="show-link">
                        <a target="_blank" rel="noopener noreferrer" href={ props.data.linkDescription[props.dataLength] }><FaGithub className="icons" /></a>
                    </div>
                    <div className="show-link">
                        <a target="_blank" rel="noopener noreferrer" href={ props.data.linkDescription[props.dataLength] }><FaArrowCircleUp className="icons rotate90" /></a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="project_container"
                ref={ projectContainerRef }
                onMouseMove={ (e) => handleMouseMove(e) }
                onMouseOut={ () => projectRef.current.style.transform = `rotateY(${0}deg) rotateX(${0}deg)` }
            >
                <div className={ (props.data.show) ? "projects js-item projectCliked" : "projects js-item"}
                    ref={projectRef} 
                    onClick={(e) => props.onToggleClick( e, props.data.id )}
                    >
                    <div className="project_img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + props.data.image})` }}></div>
                    <h4 className="project_date">{ props.data.date }</h4>
                    <h2 className="project_name">{ props.data.name }</h2>
                    <div className="project_title">{ props.data.title }</div>
                    <div className="project_tag">
                        <TagGenerator data={ props.data.generateTag } />
                    </div>
                </div>
                { props.data.show ? projectDescriptionDiv(props) : null }
            </div>
        </>
    )
}

export default Project;