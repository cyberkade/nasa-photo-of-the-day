import React, {useState, useEffect} from "react";

const Info = (props) => {
    const {explanation, title, date} = props;

    return (
        <div>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <p>{explanation}</p>
        </div>
    )
} 

export default Info;
