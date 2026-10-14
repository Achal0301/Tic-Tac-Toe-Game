import { useState } from "react";
export default function Player({initialName, symbol,isActivePlayer,onChangeName}){
    const[isEditing, setIsEditing]=useState(false);
    const [playerName , setPlayerName]=useState(initialName);
    function handleEditClick(){
        setIsEditing(wasUpdating=>!wasUpdating);  
        if(isEditing){
          onChangeName(symbol,playerName);
        }      
    }

    function handlePlayerName(event){
        setPlayerName(event.target.value);

    }
    
    let editablePlayerName=<span className="player-name">{playerName}</span>
    
    if(isEditing){
        editablePlayerName=<input type="text" required value={playerName} onChange={handlePlayerName}/>
       
    }
    

    return(    
          <li className={isActivePlayer?"active":undefined}>
            <span className='player'>
              {editablePlayerName}
              <span className="player-Symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" :" Edit"}</button>
          </li>
    )
}