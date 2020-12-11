import {useStoreState, useStoreActions} from 'easy-peasy';
import { useHistory } from "react-router-dom";

var userlistData = [
    {id: 1, username: "John", gender:"男", age: 23},
    {id: 2, username: "Peter", gender:"男", age: 18},
    {id: 3, username: "Jane", gender:"女", age: 33}
]


export default function UserList() {
    const loginUsername = useStoreState((state) => state.user.username);
    const history = useHistory();
    if (loginUsername == "") {
        history.push("/");
    }
    const userlist = useStoreState((state) => state.userlist.userlist);
    const loadUserlist = useStoreActions((actions) => actions.userlist.loadUserlist);
    loadUserlist(userlistData)

    return (
        <div>
            <p>welcome, {loginUsername}</p>
            <table>
            <thead><tr><th>id</th><th>username</th><th>gender</th><th>age</th></tr></thead><tbody>
            {userlist.map((user, idx)=>(
                <tr key={idx}>
                <td>{user.id}</td><td>{user.username}</td><td>{user.gender}</td><td>{user.age}</td>
                </tr>))}
            </tbody></table>
        </div>)
}