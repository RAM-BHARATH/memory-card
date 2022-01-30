import Item from "./Item";

const Items = ({ characters, setVisitedStatus, handleShuffle}) => {
    return(
        <div className="items">
            {characters.map(character =>(
                <Item key={character.id} setVisitedStatus={setVisitedStatus} handleShuffle={handleShuffle} character={character}/>
            ))} 
        </div>
    );
}

export default Items;