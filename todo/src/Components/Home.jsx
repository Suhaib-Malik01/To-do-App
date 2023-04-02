import React from "react";
import { useState } from "react";

import "../Styles/Home.css";
import Task from "./Task";
import { useEffect } from "react";

const Home = () => {
  const [tasks, setTasks] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);

  const [title,setTitle] = useState("");

  const [description,setDescription] = useState("");

  console.timeLog(title,description)

  const submitForm = (e) =>{

    e.preventDefault();

    setTasks([...tasks,{title, description}]);

    
    setTitle("");
    setDescription("");
  }
 
  const deleteTask = (index) => {

    const filterdArray = tasks.filter((ele,i) => {
      return i!=index;
    });



    setTasks(filterdArray);

  }

  useEffect(() => {

    localStorage.setItem("tasks",JSON.stringify(tasks));
    
  }, [tasks]);


  return (
    <div className="container">
        <form onSubmit={submitForm}>

            <input type="text" placeholder="Task Name" value={title} onChange={(e)=>{
              setTitle(e.target.value);
            }} required />

            <input placeholder="Description" value={description} onChange={(e) =>{
              setDescription(e.target.value);
            }} required></input>
            <button>Add</button>
        </form>

        {tasks.map((value,index)=>(
          <Task Title={value.title} Description={value.description}  key={index} deleteTask={deleteTask} index={index}/>
        ))}
    </div>
  );
};

export default Home;
