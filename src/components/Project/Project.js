import React from 'react';
import { FaGithub, FaArrowCircleUp } from 'react-icons/fa';
import './Project.css';
import TagGenerator from './GeneratorLi/GenetatorLi';

const Project = ( props ) => {
    //console.log('Project', props)

    const projectDescriptionDiv = (props) => {
        //console.log(props.data.show)
        return (
            <div className="project_description js-body">
                <h3>{ props.data.titleDescription }</h3>
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
            <div className={ (props.data.show) ? "projects js-item projectCliked" : "projects js-item" } onClick={ (e) => props.onToggleClick( e, props.data.id ) }>
                <div className="project_img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + props.data.image})` }}></div>
                <h4 className="project_date">{ props.data.date }</h4>
                <h2 className="project_name">{ props.data.name }</h2>
                <div className="project_title">{ props.data.title }</div>
                <div className="project_tag">
                    <TagGenerator data={ props.data.generateTag } />
                </div>
            </div>
            { props.data.show ? projectDescriptionDiv(props) : null }
        </>
    )
}

export default Project;