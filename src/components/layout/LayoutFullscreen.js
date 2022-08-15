import React from 'react';
import './LayoutFullscreen.scss';
const LayoutFullscreen = (props) => {
    return (
        <div className="layout-fullscreen">
            {props.children}
        </div>
    )
}
export default LayoutFullscreen;