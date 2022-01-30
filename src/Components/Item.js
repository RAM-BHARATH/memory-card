const Item = ({character, setVisitedStatus, handleShuffle}) =>{
    function onClickFunctions(character){
        setVisitedStatus(character.id)
        handleShuffle()
    }
    return(
        <div key={character.id} id={character.id} onClick={()=>onClickFunctions(character)}>
            <img src={`${character.imageLocation}`} alt={`${character.name}`} />
            <p>{character.name} ,{Number(character.visited)}</p>
        </div>
    )
}

export default Item;