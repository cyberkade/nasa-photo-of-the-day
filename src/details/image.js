import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 50vw; height: 100%;
    text-align: center;
    border-radius: 25px;
    padding: 15px 15px;
`

const StyledImg = styled.img`
    width: 634px; height: 100%;
    border-radius: 25px;
    align-self: center;
`
const Image = (props) => {
    const {mediaType, APOD} = props;

    if(mediaType === 'image'){
        return(
            <StyledDiv>
            <StyledImg src={APOD} alt="astronomy pic of the day"></StyledImg>
            </StyledDiv>
        )
    } else {return(
            <div> Turns out the Astronomy Picture of the Day wasn't a picture! Crazy, right? Come back tomorrow! </div>  
    )
    
    }
}

export default Image;
