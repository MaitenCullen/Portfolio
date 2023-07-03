import React, { useEffect, useState } from 'react'
import { getSkills } from '../mock/images';

export const Skills = () => {
    const theme = ''
    const [ skills, setSkills] = useState([])

    useEffect (() => {
        getSkills()
        .then((resp) => {
            console.log(resp, "soy las skilss")
            setSkills(resp);
         })
    },[]);


  return (
    <section className='skillsDiv' id='skills'>
        <h1 id={theme}>
            Habilidades Técnicas
        </h1>
        <div className='skills'>
            { skills.map( skill => (
                <div  key={skill.id} className='skill-div'>
                    <img className='skillsImage' src={skill.imagen}/>
                    <p className='skillTitle'>{skill.tecnologia}</p>
                </div>
            ))}
        </div>
    </section>
  )
}
