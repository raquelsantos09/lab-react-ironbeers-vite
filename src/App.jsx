import { Routes, Route } from 'react-router-dom'

import AllBeers from './components/AllBeers';
import './App.css'
import Home from './components/Home';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path='*' element={'Error 404: Not Found'} />
      </Routes>

    </div>
  )
}

export default App
