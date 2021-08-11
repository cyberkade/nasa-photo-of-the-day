import React, {useState} from "react";

const Image = (props) => {
    const {url, mediaType} = props;
    // const [photoOTD, SetPhotoOTD] = useState("");

    if(mediaType === 'image'){
        return(
            <div className="imgCont">
            <img src={url} alt="astronomy picture of the day"></img>
            </div>
        )
    } else {return null}
}

export default Image;
