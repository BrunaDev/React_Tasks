import React, { useState } from "react";

import '../add/AddTask.css';
import Button from "../buttons/Button";

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    };

    return(
        <div className="add-task-container">
            <input 
                onChange={handleInputChange}
                value={inputData}
                className="add-task-input"
                type="text"
            />
            <div className="add-task-button-container">
                <Button onclick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
};

export default AddTask;