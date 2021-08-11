import React from "react";
import Info from "./info";
import Image from "./image";

const Card = (props) => {
    const {data} = props;

    return (
        <div className="card">
            {data.map( (data, index) => <Info key={index} explanation={data.explanation} title={data.title} date={data.date} /> )}
            {data.map( (data, index) => <Image key={index} mediaType={data["media_type"]} url={data.hdurl} /> )}
        </div>

    )
}

export default Card;