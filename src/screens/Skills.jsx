import React, { useEffect, useState } from 'react'
import { getSkills } from '../mock/images';

export const Skills = () => {
    const [ skills, setSkills] = useState([])

    useEffect (() => {
        getSkills()
        .then((resp) => {
            console.log(resp, "soy las skilss")
            setSkills(resp);
         })
    },[]);


  return (
    <div className='skillsDiv'>
        <h1>
            Habilidades Técnicas
        </h1>
        <div className='skills'>
            { skills.map( skill => (
                <div  key={skill.id}>
                    <img className='skillsImage' src={skill.imagen}/>
                    <p>{skill.tecnologia}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
