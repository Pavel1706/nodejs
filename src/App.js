import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

   const[users, setUsers]= useState([]);

   const getUsers = ()=>{
       axios.get('http://localhost:7542/users').then(res=>{
           setUsers(res.data)
       });
   }


    useEffect(() => {
        getUsers()
    }, []);


    const createUser = ()=>{
        axios.post("http://localhost:7542/users").then(res => {
           getUsers();
        })
    }

    return (<>
        <div>
            <button onClick={createUser}>create user</button>
        </div>
        <div>
            {users.map(u => <div key={u.id}>{u.name}</div>)}
        </div>
        </>
    );
}

export default App;
