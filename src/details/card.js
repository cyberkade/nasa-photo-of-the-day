import React, {useState, useEffect} from "react";
import Info from "./info";
import Image from "./image";

const Card = (props) => {
    const {data} = props;

    return (
        <div>
            {data.map( (data, index) => <Info key={index} explanation={data.explanation} title={data.title} date={data.date} /> )}
            {data.map( (data, index) => <Image key={index} media_type={data["media_type"]} url={data.hdurl} /> )}
            <Image data={data} />
        </div>

    )
}

export default Card;