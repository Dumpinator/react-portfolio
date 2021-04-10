import React, { useRef, useEffect, useState } from 'react'
import { FaGithub, FaArrowCircleUp } from 'react-icons/fa'
import { motion, AnimatePresence } from "framer-motion"
import TagGenerator from './GeneratorLi/GenetatorLi'
import Tags from './Tags'
import './Cards.css'

const Project = ({ data, dataLength, onToggleClick }) => {
    
    const containerRef = useRef(null)
    const projectRef = useRef(null)
    const imgRef = useRef(null)
    const titleRef = useRef(null)
    const tagsRef = useRef(null)
    const nodeRef = useRef(null)
    
    const [test, setTest] = useState(false)

    useEffect(() => {
        data.show ? setTest(true) : setTest(false)
       return () => setTest(false)
        }, [data.show])

    const handleMouseMove = (event) => {
        // Project Container
        const offsetContainerX = containerRef.current.offsetLeft
        const offsetContainerY = containerRef.current.offsetTop
        const sizeContainerX = containerRef.current.clientWidth
        const sizeContainerY = containerRef.current.clientHeight

        let xAxis = ( ( ( sizeContainerX / 2 ) - ( event.pageX - offsetContainerX ) ) / 10 )
        let yAxis = ( ( ( sizeContainerY / 2 ) - ( event.pageY - offsetContainerY ) ) / 10 )
        
        if ((event.pageX > offsetContainerX && event.pageX < sizeContainerX+offsetContainerX) 
        && (event.pageY > offsetContainerY && event.pageY < sizeContainerY+offsetContainerY )) {

            // project anim
            projectRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

            imgRef.current.style.transform = `translateZ(15px)`
            imgRef.current.style.transform = `scale(1.1)`
            imgRef.current.style.borderRadius = `15px`
            imgRef.current.style.boxShadow = `0px 0px 20px 1px rgba(255,255,255,0.75)`
            
            titleRef.current.style.transform = `translateZ(15px)`

            tagsRef.current.style.transform = `translateZ(15px)`
        }
    }

    const handleMouseLeave = () => {
        // reset all anim
        projectRef.current.style.transition = "all 0.5s ease"
        projectRef.current.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`

        imgRef.current.style.borderRadius = `0`
        imgRef.current.style.transform = `translateZ(0)`
        imgRef.current.style.boxShadow = `none`

        titleRef.current.style.transform = `translateZ(0)`

        tagsRef.current.style.transform = `translateZ(0)`
    
    }

    const variants = {
        
        init: {
            opacity: [ 0, 0, 0 ],
            scale: [ 0, 0, 0],
            y: ['-50vh','-50vh','-50vh'],
        },
        
        in: { 
            opacity: [ 1, 1, 1 ],
            scale: [ 1.1, 1.1, 1.1],
            y: ['2vh', '0vh', '2vh'],
            transition: 
                {   duration: 2.5,
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                },
        },
        
        out: { 
            opacity: [ 0, 0, 0 ],
            scale: [ 0, 0, 0 ],
            y: [ '-10vh', '-10vh', '-10vh' ],
            transition: 
                {
                    repeat: 1,
                },
        }
    }

    return (
        <> 
            <div className="project_container"
                ref={ containerRef }
                onMouseEnter={ () => projectRef.current.style.transition = "none" }
                onMouseMove={ e => handleMouseMove(e) }
                onMouseLeave={ () => handleMouseLeave() }
            >
                <div className={ data.show ? "projects js-item projectSelected" : "projects js-item"}
                    ref={ projectRef } 
                    onClick={ () => onToggleClick( data.id )}
                >
                    <div ref={imgRef} className={ data.show ? "project_img imgSelected" : "project_img" } style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}></div>
                    <h4 className="project_date">{ data.date }</h4>
                    <h2 ref={titleRef} className={ data.show ? "project_name titleSelected" : "project_name" }>{ data.name }</h2>
                    <div className="project_title">{ data.title }</div>
                    <div ref={tagsRef} className="project_tag">
                        <Tags key={ data.id } data={ data.linkLanguage }/>
                    </div>
                </div>
            </div>

            <AnimatePresence >
                { test && (
                    <motion.div
                        key="description"
                        initial="init"
                        animate="in"
                        exit="out"
                        variants={ variants }
                        ref={nodeRef} 
                        className="project_description"
                    >
                        <h3>{ data.titleDescription }</h3>
                        <p>{ data.paraDescription }</p>
                        <div className="project_tag">
                            <TagGenerator data={ data.linkLanguage } />
                        </div>
                        <div className="link">
                            <div className="show-link">
                                <a target="_blank" rel="noopener noreferrer"
                                    href={ data.linkDescription[dataLength] }>
                                    <FaGithub className="icons" />
                                </a>
                            </div>
                            <div className="show-link">
                                <a target="_blank" rel="noopener noreferrer"
                                    href={ data.linkDescription[dataLength] }>
                                    <FaArrowCircleUp className="icons rotate90" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Project