import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import Button from "../buttons/Button";

import '../detail/TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [taskDescription, setTaskDescription] = useState(() => {
        const storedDescription = localStorage.getItem(`task-${params.taskTitle}`);
        return storedDescription || "";
    });

    useEffect(() => {
        localStorage.setItem(`task-${params.taskTitle}`, taskDescription);
    }, [taskDescription]); 
    
    const handleBackButtonClick = () => {
        navigate("/");
    };

    const handleDescriptionChange = (e) => {
        setTaskDescription(e.target.value);
    };

    return (
        <>
        <div className="back-button-container">
            <Button onclick={handleBackButtonClick}>Voltar</Button>
        </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <TextField
                id="standard-multiline-static"
                label="Detalhes da Tarefa"
                multiline
                rows={4}
                value={taskDescription}
                onChange={handleDescriptionChange}
                inputProps={{ style: { color: '#eee' } }}
                InputLabelProps={{ style: { color: '#eee', fontSize: 16 } }}
            />
        </div>
        </>
    );
};

export default TaskDetails;