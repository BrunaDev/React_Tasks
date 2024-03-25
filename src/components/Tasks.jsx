import React from "react";

import TaskItem from "./list/TaskItem";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            {tasks.map((task) => (
                <TaskItem 
                    key={task.id}
                    task={task}
                    handleTaskClick={handleTaskClick}
                    handleTaskDeletion={handleTaskDeletion} />
            ))}
        </>
    );
};

export default Tasks;


// Props: componentes que você consegue passar
//de um componente pai para um componente filho