import React from "react";
import Info from "./info";
import Image from "./image";
import styled from 'styled-components';

const StyledDiv = styled.div`
    max-width:100vw;
    display: flex;
    flex-flow: row;
`

const Card = (props) => {
    const {data, switchTheme, APOD, theme} = props;

    return (
        <StyledDiv>
            {data.map( (data, index) => <Info theme={theme} credit={data.copyright} switchTheme={switchTheme} key={index} explanation={data.explanation} title={data.title} date={data.date} /> )}
            {data.map( (data, index) => <Image APOD={APOD} key={index} mediaType={data["media_type"]} /> )}
        </StyledDiv>

    )
}

export default Card;