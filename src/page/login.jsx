import {useStoreActions, useStoreState} from 'easy-peasy';
import { useState } from 'react';

function login(username, password){
  // todo这里实现登录请求
  return username
}

export default function LoginPage () {
    const loginUsername = useStoreState((state) => state.user.username);
    const loginAs = useStoreActions((actions) => actions.user.loginAs);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    if (loginUsername == "") {
      return (
        <div>
        <p>username: <input onChange={event =>{setUsername(event.target.value)}}></input></p>
        <p>password: <input type="password" onChange={event =>{setPassword(event.target.value)}}></input></p>
        <p><button onClick={()=>{
          var user = login(username, password);
          loginAs(user);
          }}>login</button></p>
        </div>
      )
    }
    else {
    return (<div>welcome, {loginUsername}</div>)
    }
}