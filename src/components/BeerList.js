import BeerItem from "./BeerItem";

const BeerList = ({beers, handleSelectedBeer}) => {

    if(!beers.length) return null

     const mappedBeers = beers.map((beer, index) => {
        return <BeerItem 
        key={beer.id}
        beer={beer}
        >{beer.name}</BeerItem>
    })

    const handleSelect = (event) => {
        const chosenBeer = beers[(event.target.value)-1]
        console.log(chosenBeer)
        handleSelectedBeer(chosenBeer)
    }

    
    

    return ( 
        <select onChange={handleSelect}> {mappedBeers}</select>
     );
}
 
export default BeerList;