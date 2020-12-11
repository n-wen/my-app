import {useStoreActions, useStoreState} from 'easy-peasy';
import { useState } from 'react';
import user from '../model/user';
import { useHistory } from "react-router-dom";


export default function LoginPage () {
    const loginUsername = useStoreState((state) => state.user.username);
    const loginAs = useStoreActions((actions) => actions.user.loginAs);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errmsg, SetErrmsg] = useState('')
    const history = useHistory();

      return (
        <div>
        <p>username: <input onChange={event =>{setUsername(event.target.value)}}></input></p>
        {errmsg && <p>{errmsg}</p>}
        <p>password: <input type="password" onChange={event =>{setPassword(event.target.value)}}></input></p>
        <p><button onClick={()=>{
          var resp = user.login(username, password);
          if(resp.code != 0) {
            SetErrmsg(resp.errmsg)
          } else {
            loginAs(resp.user.username)
            history.push("/userlist")
          }
          }}>login</button></p>
        </div>
      )
}