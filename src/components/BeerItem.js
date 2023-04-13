const BeerItem = ({beer}) => {

    if (!beer) return null

    return ( 
        <>
        <option value={beer.id}>{beer.name}</option>
        </>
     );
}
 
export default BeerItem;