import './task.css'
import { doc, deleteDoc } from 'firebase/firestore'
import { database } from '../../firebaseConnection'
import { toast } from "react-toastify";
function Task(props) {
    async function handleComplete(id) {
        const docRef = doc(database, "tasks", id);
        await deleteDoc(docRef)
        toast.success("Task Completed! Keep it up!", {
            theme: "dark"
        })
    }

    async function handleDelete(id) {
        const docRef = doc(database, "tasks", id);
        await deleteDoc(docRef)
        toast.success("Task Deleted Successfully!", {
            theme: "dark"
        })
    }
    return (
        <div className='task-container' key={props.id}>
            <div className='left-main'>

            <h3 className='task-title'>{props.title}</h3>
            <p>{props.description}</p>
            </div>
            <div className='task-button'>

            <button className='button-complete' onClick={() => handleComplete(props.id)}>Complete</button>
            <button className='button-delete' onClick={() => handleDelete(props.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Task;