const Item = ({character, setVisitedStatus, handleShuffle}) =>{
    function onClickFunctions(character){
        setVisitedStatus(character.id)
        handleShuffle()
    }
    return(
        <div key={character.id} id={character.id} onClick={()=>onClickFunctions(character)}>{character.name} ,{Number(character.visited)}</div>
    )
}

export default Item;