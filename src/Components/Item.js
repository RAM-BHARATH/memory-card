const Item = ({character, setVisitedStatus, handleShuffle}) =>{
    function onClickFunctions(character){
        setVisitedStatus(character.id)
        handleShuffle()
    }
    return(
        <div key={character.id} id={character.id} onClick={()=>onClickFunctions(character)} className="item">
            <img src={`${character.imageLocation}`} alt={`${character.name}`} className="character-image"/>
            <p>{character.name}</p>
        </div>
    )
}

export default Item;