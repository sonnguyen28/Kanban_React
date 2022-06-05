import React, { useEffect, useRef } from "react";

import "./Dropdown.css";

function Dropdown(props){
    const dropdownRef = useRef();

    const handleClick = (even) =>{
        if(
            dropdownRef &&
            !dropdownRef.current?.contains(even.target) && 
            props.onClose
        )
        props.onClose();
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick)
        };
    });

    return (
        <div
        ref = {dropdownRef}
        className = {`dropdown custom-scroll ${props.class ? props.class : ""}`}
        >
            {props.children}
        </div>
    );
}

export default Dropdown;