import React, {useEffect, useState} from "react";
import styles from "./taskManager.module.css"
import mockTaskManger from "./mockTaskManger.jsx";

// import "./taskManager.module.css"

const TaskManager = () => {

    const [tasks,setTask] = useState([ ]);

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
                {/*<div className = "wrapper">*/}
            {/*<div className = {styles.mainC}*/}
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
                                        <span className = {styles.delete}>delete </span>

                                    </li>


                                    ))

                            }


                              {/*<li>*/}
                              {/*    <span className={styles.name}>Practice DOM Manipulation</span>*/}
                              {/*     <span className={styles.delete}>delete</span>*/}
                              {/*</li>*/}

                              {/*  <li>*/}
                              {/*     <span className={styles.name}>Build a mini project</span>*/}
                              {/*     <span className={styles.delete}>delete</span></li>*/}

                              {/* <li>*/}
                              {/*      <span className={styles.name}>Revise CSS Flexbox</span>*/}
                              {/*      <span className={styles.delete}>delete</span>*/}
                              {/*  </li>*/}

                        </ul>
                    </div>

                    <form className={styles.addTask}>
                        <input type="text" placeholder="Add a task..."/>
                        <button>Add</button>
                    </form>

                </div>
        </>
    )

}

export default TaskManager;


// rsc