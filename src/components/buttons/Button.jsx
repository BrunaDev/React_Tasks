import React from "react";

import '../buttons/Button.css';

const Button = ({ children, onclick }) => {
    return(
        <button onClick={onclick} className="button">
            {children}
        </button>
    );
};

export default Button;