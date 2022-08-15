import React from 'react';
import './ErrorMessage.scss';
const ErrorMessage = (props) => {
    return (
        <div className="error-message">
            <span>Error</span>
            <span>{props.error}</span>
        </div>
    )
}
export default ErrorMessage;