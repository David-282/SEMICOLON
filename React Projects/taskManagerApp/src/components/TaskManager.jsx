import React, {useEffect, useState} from "react";
import styles from "./taskManager.module.css"
import mockTaskManger from "./mockTaskManger.jsx";

// import "./taskManager.module.css"

const TaskManager = () => {

    const [tasks,setTask] = useState([ ]);
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!newTask.trim()) return;
        setTask((prev)=> [...prev,newTask]);
        setNewTask("");
    }

    function deleteTask(taskToDelete){
        setTask(tasks.filter((task)=>(task !== taskToDelete)));
    }

    useEffect(() =>{
        async function fetchTask() {

            try{
                const data = await mockTaskManger();
                setTask(data);
                console.log(data);
            } catch (error){
                console.log(error);
            }
        }
        fetchTask()
        },[])
    return(
        <>
        <div className={styles.wrapper}>

        <header>
            <div className={styles.pageBanner}>
                <h1 className={styles.title}>Task Manager</h1>

                <form className={styles.searchTasks}>
                    <input type="text" placeholder="Search tasks..."/>
                </form>
            </div>
        </header>

        <div className={styles.tasklist}>
            <h2 className={styles.title}>Add Tasks To CarryOut </h2>

            <ul>
                {
                    tasks.map((task,index) =>(
                        <li key={index}>
                            <span className ={styles.name}>{task}</span>
                            <span onClick={()=> deleteTask(task)} className = {styles.delete}>delete </span>

                        </li>
                        ))
                }
            </ul>
        </div>

        <form onSubmit={handleSubmit} className={styles.addTask}>
            <input type="text"  value ={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder="Add a task..."/>
            <button>Add</button>
        </form>

    </div>
        </>
    )}

export default TaskManager;


// rsc