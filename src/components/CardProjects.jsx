import React, { useEffect, useState } from 'react'
import {GiSelfLove } from "react-icons/gi";

import { getAllProjects } from '../mock/project';


export const CardProjects = () => {
    const theme = ''
    const [ projects, setProjects] = useState([])

    useEffect (() => {
        getAllProjects()
        .then((resp) => {
            console.log(resp, "soy las skilss")
            setProjects(resp);
         })
    },[]);
  return (
    <>
    { projects.map( project => (
    
       <div className="card" key={project.id} id={theme}>
            <a className="" href={project.link} target="_blank">
            <div className="icon"><i className="material-icons md-36">{project.icon}</i></div>
             <p className="title">{project.project}</p>
             <p className="text">{project.description} </p>
             {project.video? <p className="text"> <a className='Unlimited ' href="https://ibb.co/zFcrZTD">LINK</a></p> : null}
             <p className="textTechnologies">{project.technologies}</p>
            </a> 
       </div>
    ))}
    </>

  )
}
