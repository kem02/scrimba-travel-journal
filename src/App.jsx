import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import data from './data'
import globe from './assets/globe.png'
import ping from './assets/ping.png'
import './App.css'

function Navbar() {
  console.log(data);

  return(
    <nav className='nav--container'>
      <div className='heading--container'>
        <img src={globe}/>
        <h1>My travel journal.</h1>
      </div>
    </nav>
  )
}

function Main(props) {
  return(
    <div className='main'>
      
      <div className='card--container'>
        <img src={props.item.imageUrl}/>

        <div className='inner--card'>

          <div className='location--title'>
            <img src={ping}/>
            <h3>{props.item.location}</h3>
            <h4><a href={props.item.googleMapsUrl}>View on Google Maps</a></h4>
          </div>

          <h2 className='card--title'>{props.item.title}</h2>
          <h2 className='dates'><b>{props.item.startDate}-{props.item.endDate}</b></h2>
          <p className='description'>{props.item.description}</p>

        </div>
        

      </div>
      <hr/>
    </div>
    
  )
}





function App() {
  const cards = data.map(item => {
    return <Main 
      item={item}
    />
  })
  

  return (
    <div className="App">
      <Navbar />
      {cards}

    </div>
  )
}

export default App
