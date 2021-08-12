import React, {useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/Constants";
import Card from "./details/card"
import styled from 'styled-components';
import "./App.css";

  const StyledSection = styled.section`
    max-width:100vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    background-color: 
      ${props => props.type === 'materialDark' ? props.theme.materialDark : null}
      ${props => props.type === 'regular' ? props.theme.regular : null}
    ;
    color:
      ${props => props.type === 'materialDark' ? props.theme.materialGray : null}
      ${props => props.type === 'regular' ? props.theme.regularBlack : null}
    ;
  `

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('materialDark')

  useEffect( () => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then( res => setData([res.data]))
      .catch(err => {
        console.error(err);
        setError(err)
      })
  }, [])

  const switchTheme = () => theme === 'materialDark' ? setTheme('regular') : setTheme('materialDark');

  useEffect( () => {
    console.log(data);
  }, [data])

  // data.map( item => {
  //   return <div>
      
  //   </div>
  // })

  return (
    data && <StyledSection type={theme}>
              {error && <h1>{error}</h1>}
              <h1>APOD</h1>
              <Card switchTheme={switchTheme} data={data}/>
            </StyledSection>
          );
}

export default App;
