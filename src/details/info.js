import React from "react";

const Info = (props) => {
    const {explanation, title, date} = props;

    return (
        <div className="info">
            <h1 className="title">{title}</h1>
            <h2 >{date}</h2>
            <p>{explanation}</p>
        </div>
    )
} 

export default Info;
