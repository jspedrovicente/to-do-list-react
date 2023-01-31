import "./admin.css"
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { useState, useEffect } from "react";
import { auth, database } from '../../firebaseConnection'
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Task from "../../components/Task";
import {
    addDoc, collection, onSnapshot, query, orderBy, where
} from 'firebase/firestore'


function Admin() {
    const [visible, setVisible] = useState(false);
    const [taskTitle, settaskTitle] = useState('');
    const [taskDescription, settaskDescription] = useState('');
    const [user, setUser] = useState({});
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const userDetail = localStorage.getItem("@detailUser");
            setUser(JSON.parse(userDetail));

            if (userDetail) {
                const data = JSON.parse(userDetail);
                const tasksRef = collection(database, 'tasks')
                const q = query(tasksRef, orderBy('created', 'desc'), where('userUid', '==', data?.uid))
                const unsub = onSnapshot(q, (snapshot) => {
                    let list = [];
                    snapshot.forEach((doc) => {
                        list.push({
                            id: doc.id,
                            taskTitle: doc.data().taskTitle,
                            taskDescription: doc.data().taskDescription,
                            userUid: doc.data().userUid,
                            created: doc.data().created,
                        })
                    })
                    setTasks(list);
                })
            }
        }

        loadTasks();
    }, [])
    async function handleRegister(e) {
        e.preventDefault();

        if (taskTitle === '' || taskDescription === '') {
            toast.error("Please fill in Task name and Description", {
                theme: "dark"
            })
            return;
        }

        await addDoc(collection(database, "tasks"), {
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            created: new Date(),
            userUid: user?.uid,
            
        })
            .then(() => {
                toast.success("Task Registered! :)", {
                    theme: "dark"
                })
                settaskTitle('');
                settaskDescription('');
                setVisible(false);
            })
            .catch((e) => {
                toast.error("Error while Registering, please Try again!", {
                    theme: "dark"
                })
        })
    }

    async function handleLogout() {
        await signOut(auth)
        toast.success("Logout Successful!", {
            theme: "dark"
          })
        
    }
    return (
        <div className="admin-container">
            <h1>Minhas Tarefas <button className="admin-add" onClick={() => { setVisible(true) }}>+</button></h1>
            <Rodal animation="door" visible={visible} onClose={() => {setVisible(false)}} className="rodal-ccss">
                <div>
                    <form className="new-task-form" onSubmit={handleRegister}>
                        <label>Task Name:</label>
                        <input type="text" placeholder="Task Name" value={taskTitle} onChange={(e) => settaskTitle(e.target.value)}/>
                        <label>Task Description:</label>
                        <input type="text" placeholder="More information on task" value={taskDescription} onChange={(e) => settaskDescription(e.target.value)} />
                        <button className="submit" type="submit">Register Task</button>
                    </form>
                </div>

            </Rodal>
            {tasks.map((task) => (
                <Task title={task.taskTitle} description={task.taskDescription} date={task.created} key={task.id} id={task.id}></Task>
                ))}
            <button className="logout-button" onClick={handleLogout}>Log-out</button>
        </div>
    )
}

export default Admin;