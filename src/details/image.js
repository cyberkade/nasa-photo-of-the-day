import React, {useState} from "react";
import styled from 'styled-components';

const Image = (props) => {
    const {url, mediaType} = props;
    // const [photoOTD, SetPhotoOTD] = useState("");

    if(mediaType === 'image'){
        return(
            <div className="imgCont">
            <img src={url} alt="astronomy pic of the day"></img>
            </div>
        )
    } else {return null}
}

export default Image;
