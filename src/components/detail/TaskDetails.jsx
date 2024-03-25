import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import Button from "../buttons/Button";

import '../detail/TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("/");
    };

    return (
        <>
        <div className="back-button-container">
            <Button onclick={handleBackButtonClick}>Voltar</Button>
        </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>Thiago Miguel vai casar comigo sim</p>
        </div>
        </>
    );
};

export default TaskDetails;