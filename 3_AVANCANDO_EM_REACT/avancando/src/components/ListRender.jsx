import React from 'react'
import { useState } from 'react'




function ListRender() {
    const [list] = useState(["Renan","Carlos","Silveira","Silveira"]);
    const [users, setUsers] = useState([
        {id:1, name: "José", age:21},
        {id:2, name: "Flávio", age:39},
        {id:3, name: "Bernardo", age:12}
    ]);

    const deleteRandom = ()=>{
        const randomNumber = Math.floor(Math.random()*4)

        setUsers((prevUsers)=> prevUsers.filter((user)=> randomNumber !== user.id ))

    }

    
  return (
    <div>
        <ul>
            {list.map((item, i)=>(
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>

        <div>
            <button onClick={deleteRandom}>Delete Um Usuário Aleatório</button>
        </div>

    </div>
  )
}

export default ListRender