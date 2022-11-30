import './App.css';
import Characters from './Characters.js';
import dataJson from './Data.json'
import NewCharacter from './NewCharacters.js';
import {useState} from "react";
import Character from './Characters.js';


function App() {
  const [show, setShow] = useState (true);
  const [data, setData] = useState (dataJson);
 

  /*Para crear un nuevo personaje*/
  function add(createCharacter){
    data.push(createCharacter)
  }

  /*Para agregar un nuevo personaje, pero primero lo que hace es verificar que no esté el que voy a  agregar
  entonces con el filter lo que hace es sacar todo lo que no sea lo que le estoy diciendo y va creando un array*/

  function editCharacter(changed){
    const newC = data.filter((Char) => changed.id !== Char.id)
   /*char es cada bloque del json, con esto le decimos que filtre todos los id de char que sean diferentes a los id del que hemos cambiado*/
    newC.push(changed); /*agregame el que hemos creado en el nuevo array*/
    setData(newC) /*modifica el json con el nuevo array*/
  }

  function setAll(deleted){
   const newAll= data.filter((Char) => deleted.id !== Char.id)
    setData(newAll) 
  }

  function changeView(){
    setShow(!show)
  }
  

  return (
    <>
    <button onClick={changeView}>Show the other Characters</button> 
    <div className="App">
          {show===true
          ?
          (data.map((eachCharacter)=> 
          <Characters 
          key={eachCharacter.name} 
          /* Key es para identificar cada dato, como el id*/
          id={eachCharacter.id}
          name={eachCharacter.name} 
          image={eachCharacter.image} 
          status={eachCharacter.status} 
          species={eachCharacter.species} 
          gender={eachCharacter.gender} 
          location={eachCharacter.location.name}
          edit= {(item)=> editCharacter(item)} /*Esto es para que edite lo que hay en el padre*/
          remove= {(deleteObj)=> setAll(deleteObj)}
          />)) 
          /*eachCharacter se pone para traer el bloque de cada json de manera individual*/       
          :
          <div className="NewCharacter">
          <NewCharacter new ={(createCharacter)=> add(createCharacter)}/>
           {/*Para crear el nuevo personaje junto con la function add(createCharacter)*/
          } 
          </div>
  /*Para elegir que mostrar se puede hacer de dos maneras a través de una funcion normal (arriba) o a través de una arrow funtion*/
  /*Para seleccionar qué mostrar:
  -se declara primero un estado inicial sea true o false (hooks)
  -le insertamos dentro del return un button onClick el arrow function de cambiando el estado setShow(diciendole que sea diferente al estado inicial  !show) 
  -Lo de seleccionar que mostrar también se puede hacer mediante diplay: none; block*/
          } 
        
    </div>
    </>
  );
}

export default App;

/*el padre es el que ponga todo en display none*/