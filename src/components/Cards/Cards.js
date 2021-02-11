import React, { useRef } from 'react';
import { FaGithub, FaArrowCircleUp } from 'react-icons/fa';
import './Cards.css';
import TagGenerator from './GeneratorLi/GenetatorLi';

const Project = ( props ) => {
    const { dataLength } = props
    
    let projectRef = useRef(null)
    let containerRef = useRef(null)
    
    const handleMouseMove = (event) => {
        //event.stopPropagation()

        // Project Container
        const offsetContainerX = containerRef.current.offsetLeft
        const offsetContainerY = containerRef.current.offsetTop
        const sizeContainerX = containerRef.current.clientWidth
        const sizeContainerY = containerRef.current.clientHeight

        // Project
        /*
        const offsetProjectX = projectRef.current.offsetLeft
        const offsetProjectY = projectRef.current.offsetTop
        const sizeProjectX = projectRef.current.clientWidth
        const sizeProjectY = projectRef.current.clientHeight
        */
       
        let xAxis = ( ( ( sizeContainerX / 2 ) - ( event.pageX - offsetContainerX ) ) / 10 )
        let yAxis = ( ( ( sizeContainerY / 2 ) - ( event.pageY - offsetContainerY ) ) / 10 )
        
        if ((event.pageX > offsetContainerX && event.pageX < sizeContainerX+offsetContainerX) 
        && (event.pageY > offsetContainerY && event.pageY < sizeContainerY+offsetContainerY )) {

            projectRef.current.style.transform = `
                    rotateY(${xAxis}deg)
                    rotateX(${yAxis}deg)
                `
        }
    }

    React.useEffect(() => {
        console.log('Project', dataLength)
        // cleanup this component
        return () => {
        //window.removeEventListener('keydown', handleMouseOver);
        };
    }, [dataLength]);

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
                ref={ containerRef }
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