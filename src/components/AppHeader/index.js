import React from 'react';
import './style.css'

const AppHeader = ({toDo,done}) => {
    return (
        <div className="app-header d-flex">
            <h1>My PhoneBook</h1>
        </div>
    );
};

export default AppHeader;