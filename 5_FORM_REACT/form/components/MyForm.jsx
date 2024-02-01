import React from 'react'
import "./MyForm.css"
import { useState } from 'react'


function MyForm({userName, userEmail}) {
    const[name,setName] = useState(userName);
    const[email,setEmail] = useState(userEmail);
    const[bio,setBio] = useState("");
    const[role,setRole] = useState("");

    const handleName =(e)=>{
        setName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name,email,bio,role)
        setEmail("")
        setName("")
        setBio("")
        setRole("")
    }
    console.log(name,email,bio,role)


  return (
    <div>
        {/*Criação do FORM*/}
        {/*envio do formulario com onSubmit*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name || ""}/>
            </div>

            {/*label envolvendo o input*/}
            <label>
                <span>E-mail:</span>
                {/*simplificando a alteração de dado*/}
                <input type="text" name="email" placeholder="Digite seu e-mail" onChange={(e)=>setEmail(e.target.value)} value={email ||""}/>
            </label>

            {/*Textarea*/}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do Usuário' onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>
            </label>

            {/*Select*/}
            <label>
                <span>Função no sistema:</span>
               <select name="role" onChange={(e)=>{setRole(e.target.value)}}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
               </select>
            </label>

            
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm