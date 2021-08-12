import React, {useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/Constants";
import Card from "./details/card"
import styled from 'styled-components';

  const StyledSection = styled.section`
    overflow: hidden;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    color:
      ${props => props.type === 'materialDark' ? props.theme.materialGray : null}
      ${props => props.type === 'regular' ? props.theme.regularBlack : null}
    ;
    background-color: 
      ${props => props.type === 'materialDark' ? props.theme.materialDark : null}
      ${props => props.type === 'regular' ? props.theme.regular : null}
    ;
    h1 {
      font-size: 32px;
      margin: 15px 0px 10px 0px;
      border-radius: 15px;
      padding: 5px 10px;
    }
  `

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('materialDark');
  const [APOD, setAPOD] = useState('');

  useEffect( () => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then( res => {
        setData([res.data])
        setAPOD(res.data.hdurl)
      })
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
    data && <StyledSection className='head' type={theme}>
              {error && <h1>{error}</h1>}
              <h1>Astronomy Picture Of The Day</h1>
              <Card APOD={APOD} switchTheme={switchTheme} theme={theme} data={data}/>
            </StyledSection>
          );
}

export default App;
