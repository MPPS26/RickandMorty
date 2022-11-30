import {useState} from "react";

function NewCharacter(props){

    const [image, setImg] = useState ()
    const [status, setStatus] = useState ()
    const [name, setName] = useState ()
    const [species, setSpecies] = useState ()
    const [gender, setGender] = useState ()
    const [location, setLocation] = useState ()


    return(
        <div>
            <p>IMAGE</p> <input type="text" onChange={(event) => setImg(event.target.value)}/>
            <p>STATUS</p> <input type="text" onChange={(event) => setStatus(event.target.value)}/>
            <p>NAME</p> <input type="text"  onChange={(event) => setName(event.target.value)}/>
            <p>SPECIES</p> <input type="text" onChange={(event) => setSpecies(event.target.value)}/>
            <p>GENDER</p> <input type="text"  onChange={(event) => setGender(event.target.value)}/>
            <p>LOCATION</p> <input type="text" onChange={(event) => setLocation(event.target.value)}/><br/>
           {/*Apartir de aquí para crear el nuevo personaje, se hace objeto y en locatio se hace otro objeto porque
           en el json location esta dentro de un objeto y la estructura de este objeto(para crear nuevo personaje)
           debe ser igual a la estructura que tiene el json porque el personaje que se crea se agrega en el json*/}
            <button onClick={()=> props.new(
                {
                image: image,
                name: name,
                status: status,
                species: species,
                gender:gender,
                location: 
                {name: location},
                }
            )}>Add Character</button>
        </div>
    /*En return solo va lo de htm*/
    )
}

export default NewCharacter