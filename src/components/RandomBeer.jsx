import React from 'react'
import Header from './Header'
import axios from 'axios';
import { useEffect, useState } from 'react'

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({})

  useEffect(() => {
    async function fetchRandomBeer() {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      setRandomBeer(response.data)
    }
    fetchRandomBeer()
  }, [])

  return (
    <div>
      <header>
        <Header />
      </header>
      RandomBeer
      <img style={{ height: "250px" }} src={randomBeer.image_url} alt='{randomBeer.name}'></img>
      <h3>{randomBeer.name}</h3>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>Created by:{randomBeer.contributed_by}</p>
    </div>
  )
}

export default RandomBeer