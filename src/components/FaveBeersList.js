
const FaveBeersList = ({favouritedBeers}) => {

    if(!favouritedBeers.length) return null

    const mappedFaveBeers = favouritedBeers.map((favbeerlist) => {
        return <li 
        key={favbeerlist.id}>
        {favbeerlist.name}
        </li>})
        console.log(favbeerlist.name)

    return( 
        <>
        <ul>
            {mappedFaveBeers}
        </ul>
        </>
     );
}
 
export default FaveBeersList;