import React from "react";
import styled, {keyframes}  from 'styled-components';
    
    const kf = keyframes`
        50%{
        transform: scale(0.8);
        }
        100%{
        opacity: 1;
        transform: scale(1);
        }
    `

    const StyledDiv = styled.div`
        transform: scale(2);
        opacity: 0;
        animation: ${kf} 0.3s ease-in-out forwards;
        padding: 15px;
        display: flex;
        flex-flow: column nowrap;
    `
    const StyledButton = styled.button`
        align-self: flex-end;
    `

const Info = (props) => {
    const {explanation, title, date, switchTheme} = props;

    return (
        <StyledDiv>
            <h1 className="title">{title}</h1>
            <StyledButton onClick={() => switchTheme()}>Switch Theme!</StyledButton>
            <h2 >{date}</h2>
            <p>{explanation}</p>
        </StyledDiv>
    )
} 

export default Info;
