import React, {useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/Constants";
import Details from "./details/details"
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect( () => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then( res => setData(res.data))
      .catch(err => {
        console.error(err);
        setError(err)
      })
  }, [])

  useEffect( () => {
    console.log(data);
  }, [data])
  // data.map( item => {
  //   return <div>
      
  //   </div>
  // })

  return (
    <div className="app">
      {error && <h1>{error}</h1>}
      <h1>APOD</h1>
      <Details data={data}/>

    </div>
  );
}

export default App;
