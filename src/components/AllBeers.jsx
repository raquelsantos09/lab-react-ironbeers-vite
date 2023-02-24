import React from "react";
import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeers() {
    const [allBeers, setAllBeers] = useState([]);
    const [query, setQuery] = useState('');

    const fetchData = async () => {
        const response = await axios.get(
            "https://ih-beers-api2.herokuapp.com/beers"
        );
        setAllBeers(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log(allBeers);
    }, [allBeers]);

    const handleSearch = async () => {
        const response = await axios.get(
            `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
        );
        setQuery(response.data);
    };

    return (
        <div className="App">
            <Header />
            <label>
                Search
                <input type="text" value={query} onChange={(event) => handleSearch(event.target.value)} ></input>
            </label>
            <h1>List of all the beers:</h1>
            {allBeers.map((beer) => (
                <div
                    style={{
                        border: "1px solid white",
                        borderRadius: "12px",
                        marginBottom: "1rem",
                    }}
                >
                    <img style={{ height: "250px" }} src={beer.image_url} alt='{beer.name}'></img>
                    <Link to={`/beers/${beer._id}`}>
                        <h3>{beer.name}</h3>
                    </Link>
                    <p>{beer.tagline}</p>
                    <p>Created by:{beer.contributed_by}</p>
                </div>
            ))}
        </div>
    );
}

export default AllBeers;