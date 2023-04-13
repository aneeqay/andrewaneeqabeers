import { useState, useEffect } from "react";
import BeerDescription from "../components/BeerDescription";
import BeerList from "../components/BeerList";
import FaveBeersList from "../components/FaveBeersList.js";

const BeerContainer = () => {
    const [beers, setBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState("")
    const [favouritedBeers, setFavouritedBeers] = useState("")

    useEffect(() => {
        getBeers()
    }, [])

    const getBeers = () => {
        fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }

    const handleSelectedBeer = (chosenBeer) => {
        setSelectedBeer(chosenBeer)
    }
    
    const handleFavouritedBeer = (chosenBeer) => {
        const favouritedBeersArray = []
        favouritedBeersArray.push(chosenBeer)
        setFavouritedBeers(favouritedBeersArray)
    }

    return ( 
        <>
            <BeerList beers={beers} handleSelectedBeer={handleSelectedBeer}/>
            <BeerDescription selectedBeer={selectedBeer} handleFavouritedBeer={handleFavouritedBeer}/>
            <FaveBeersList beer={beers} favouritedBeers={favouritedBeers} />
        </>
     );
}
 
export default BeerContainer;