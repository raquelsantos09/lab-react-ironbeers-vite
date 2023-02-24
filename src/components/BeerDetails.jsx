import React, { useEffect, useState } from 'react'
import axios from "axios";
import Header from "./Header";
import { useParams } from 'react-router-dom';

function BeerDetails() {
  const { id } = useParams()

  const [beer, setBeer] = useState({})

  useEffect(() => {
    async function fetchBeer() {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      setBeer(response.data)
    }
    fetchBeer()
  }, [id])

  return (
    <div>
      <Header />
      BeerDetails
      <img style={{ height: "250px" }} src={beer.image_url} alt='{beer.name}'></img>
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>Created by:{beer.contributed_by}</p>
    </div>
  )
}

export default BeerDetails