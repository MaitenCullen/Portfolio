

const Skills = [{
    id:1,
    tecnologia:"Javascript",
    imagen:"./img/javascript.png"
}, 
{
    id:3,
    tecnologia:"React js",
    imagen:"./img/ReactJS1.png"
},
{
    id:4,
    tecnologia:"React Native",
    imagen:"./img/reactMulti.png"
},
{
    id:5,
    tecnologia:"HTML",
    imagen:"./img/html5.png"
},
{
    id:6,
    tecnologia:"CSS",
    imagen:"./img/css3.png"
},
{
    id:7,
    tecnologia:"Bootstrap",
    imagen:"./img/bootstrap1.png"
},
{
    id:8,
    tecnologia:"Foundation",
    imagen:"./img/foundation.png"
},
{
    id:10,
    tecnologia:"Firebase",
    imagen:"./img/firebase.png"
},
{
    id:11,
    tecnologia:"Postman",
    imagen:"./img/postman-icon.png"
},
{
    id:12,
    tecnologia:"SASS",
    imagen:"./img/sass.png"
}
,
{
    id:13,
    tecnologia:"Tailwind",
    imagen:"./img/tailwind1.png"
}

]

export const  getSkills =() =>  new Promise ((resolve, reject) => {
let condition = true
        if (condition){
            resolve(Skills)
        } else {
            reject ("algo salio mal")
        }
    })

    export const getItem=(id) =>  new Promise ((resolve) => {
        let condition = true
            if (condition){
                resolve(Skills.find(skill => skill.id === parseInt(id)))
            }
                  
        })