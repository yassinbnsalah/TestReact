import React, { useEffect, useState } from 'react'
import useDerouiche from './useDerouiche';
import { Link } from 'react-router-dom';

function HelloC(props) {
    const [somme , setSomme] = useState(3); 
    const [test ,setTest] = useState(false);
    const [student , setStudent] = useState({
        name: "",
        prename : ""
    });
    const sommmeCalcul = () =>{
        setSomme(somme+ 3)
    }
    const [{color, background} , setColor] = useState(
        {color:"red" , background:"purple"}
    )
    useEffect(() =>{
        console.log("somme changed");
    },[])
    // Hooks perso 
    const {name}  = useDerouiche() ;
  return (
    <div>
      title from props :{props.title}<br></br>
      title from props :{props.class}<br></br>
      somme : {somme}<br></br>
      <a onClick={sommmeCalcul}>New Somme </a><br></br>
      {color} :: {background}
      <br/>
      <input onChange={e => setColor(current =>({...current , color:e.target.value}))}/>
      <input onChange={e => setColor(current =>({...current , background:e.target.value}))}/>
      <br/>
      <p>{name}</p><br/>
      <Link to={"/home"}>Home </Link>
    </div>
  )
}

export default HelloC
