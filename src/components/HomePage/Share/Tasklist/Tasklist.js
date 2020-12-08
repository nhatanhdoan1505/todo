import React, {useEffect, useState} from 'react';
import Aux from '../../../../hoc/Axu';
import TodoMain from '../../Main/TodoMain/TodoMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from '../../../../axios/axios';
import Row from './Row/Row';

function Tasklist(props) {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [share, setShare] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.request(`/task_lists/${props.id}/share`);
                setShare(request.data);
            } catch (error) {
                console.log(error);   
            }
        }
        fetchData();
    },[])

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.request('/users');
                const usersList = request.data;
                const list = usersList.map(user => {
                    let id = user.id;
                    let email = user.email;
                    const ob = {id: email};
                    renameKey(ob, "id", id);
                    return ob;
                });
                const users = list.reduce((ob, el) => {
                    return {...ob, ...el}
                });
                setUser(users);
            } catch (error) {
                console.log(error); 
            }
        }
        fetchData();
    },[])

    const renameKey = (obj, old_key, new_key) => {    
        // check if old key = new key   
            if (old_key !== new_key) {                   
               Object.defineProperty(obj, new_key, // modify old key 
                                    // fetch description from object 
               Object.getOwnPropertyDescriptor(obj, old_key)); 
               delete obj[old_key];                // delete old key 
               } 
        }

        const row = share.map(s => {
            return <Row
                        key={s.user_id}
                        user={user}
                        id={s.user_id}
                        taskListId={s.task_list_id}
                        write={s.is_write}
                        name={props.name}/>
        }) 

    return (
        <Aux>
            <div style={{marginBottom:"15px", padding:"10px"}}> 
                {row}
            </div>
        </Aux>
    )
}

export default Tasklist;
