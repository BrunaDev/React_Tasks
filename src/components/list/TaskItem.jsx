import React from "react";
import { CgClose, CgInfo, CgCheck } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import '../list/TaskItem.css'

const TaskItem = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}`);
    };

    return (
        <div
            className="task-container"
            style={task.completed ? {borderLeft: '16px solid #CCA9DD'} : {} }
        >
            {task.completed && <CgCheck className="check-icon" />}
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button
                    className="remove-task-button" 
                    onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose/>
                </button>
                <button
                    className="see-task-detail-button" 
                    onClick={handleTaskDetailsClick}>
                    <CgInfo/>
                </button>
            </div>
        </div>
    );
};

export default TaskItem;