import React from 'react'

import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
const options = [];

for(const elem of Object.keys(data)){
  options.push(Number(elem));
}

const App = () => {

  const[selectVal,setSelectVal] = useState("");

  const yearData = (e) => {
    setSelectVal(e.target.value);
  }
  return (
    <div id="main">
         <select onChange={yearData}>
         <option value={null} defaultValue></option>
            {
              options.map((opt,index) => (
                <option key={index}>{opt}</option>
              ))
            }
            </select>
            <div id ="selected-year">{selectVal==="" ? "No year selected" :`Selected year-${selectVal}`}</div>
            <ul>
                {
                  selectVal && data[selectVal].map((el,index) => (
                    <li key={index}>{el}</li>
                  ))
                }
            </ul>
    </div>
  )
}




export default App;
