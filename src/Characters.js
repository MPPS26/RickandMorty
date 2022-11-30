import { getDefaultNormalizer } from "@testing-library/react"
import {useState} from "react"

function Character(props){

    const [id,setID] =useState (props.id)
    const [image, setImg] = useState (props.image)
    const [status, setStatus] = useState (props.status)
    const [name, setName] = useState (props.name)
    const [species, setSpecies] = useState (props.species)
    const [gender, setGender] = useState (props.gender)
    const [location, setLocation] = useState (props.location)
    

    const editCharacter =()=>{
      props.edit({
        id: id,
        image: image,
        name: name,
        status: status,
        species: species,
        gender:gender,
        location: 
        {name: location},
    })
    }

    const deleteCharacter =()=>{
        props.remove({ id })
    }
    
    return(
        <div>
           <img src={image}/>
            < input type="text" value={status} onChange={(event) => setStatus(event.target.value)}/>
            < input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            < input type="text" value={species} onChange={(event) => setSpecies(event.target.value)}/>
            < input type="text" value={gender} onChange={(event) => setGender(event.target.value)}/>
            < input type="text" value={location} onChange={(event) => setLocation(event.target.value)}/>
            <button onClick={editCharacter}> cambiar personaje </button>
            <button onClick={deleteCharacter}>Eliminar personaje</button> 
        </div>
    /*aquí en return solo va lo de htm*/
    /*el value se pone cuando queremos editar (modificar) el input*/
     

        );
    }
export default Character;
