import React from 'react';

import "../Styles/Task.css"

const Task = ({Title,Description, deleteTask, index}) => {
  return (
    <div className='taskContainer'>
      <div>
        <p>{Title}</p>
        <p>{Description}</p>
      </div>
      <button onClick={()=> deleteTask(index)}>Delete</button>
    </div>
  );
}

export default Task;
