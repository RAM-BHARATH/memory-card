import './styles/reset.css';
import './styles/App.css';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import Items from './Components/Items';
// import Item from './Components/Item';

const characterArray = [
  {
    id:1,
    name:'Naruto Uzumaki',
    visited: 0,
    imageLocation:"./images/naruto.jpeg"
  },
  {
    id:2,
    name:'Sasuke Uchiha',
    visited: 0,
    imageLocation:"./images/sasuke.jpeg"
  },
  {
    id:3,
    name:'Shikamaru Nara',
    visited: 0,
    imageLocation:"./images/shikamaru.jpeg"
  },
  {
    id:4,
    name:'Rock Lee',
    visited: 0,
    imageLocation:"./images/rock_lee.jpeg"
  },
  {
    id:5,
    name:'Kiba Inuzuka',
    visited: 0,
    imageLocation:"./images/kiba.jpeg"
  },
  {
    id:6,
    name:'Sakura Haruna',
    visited: 0,
    imageLocation:"./images/sakura.jpeg"
  },
  {
    id:7,
    name:'Ino Yamanaka',
    visited: 0,
    imageLocation:"./images/ino.jpeg"
  },
  {
    id:8,
    name:'Choji Akimichi',
    visited: 0,
    imageLocation:"./images/choji.jpeg"
  },
  {
    id:9,
    name:'Hinata Hyuga',
    visited: 0,
    imageLocation:"./images/hinata.jpeg"
  },
  {
    id:10,
    name:'Neji Hyuga',
    visited: 0,
    imageLocation:"./images/neji.jpeg"
  },
];

const shuffleArray = () =>{
  // let narutoCharactersTemp=[1,2,3,4];
  const narutoCharactersTemp = [...characterArray];
  console.log("narutoCharacters - Shuffle Array")
  // console.log(narutoCharactersTemp);
  // console.log(narutoCharacters)
  // console.log(narutoCharactersTemp)
  // console.log("narutoCharactersTemp")
  // console.log(narutoCharactersTemp)
  let narutoCharactersShuffled = [];
  console.log("In shuffle array")
  while(narutoCharactersTemp.length>0){
    let num = Math.floor(Math.random()*narutoCharactersTemp.length);
    console.log("Random number: "+num)
    narutoCharactersShuffled.push(...narutoCharactersTemp.splice(num,1))
    console.log("narutoCharacters - While loop")
    console.log(narutoCharactersTemp)
    console.log("Character array from Shuffle Array:")
    console.log(characterArray)
  }
  console.log("narutoCharactersShuffled")
  console.log(narutoCharactersShuffled)
  console.log("narutoCharacters - after shuffling")
  console.log(characterArray)
  // console.log(narutoCharacters)
  // setNarutoCharacters(narutoCharactersShuffled)
  console.log("After set Naruto Characters")
  console.log(narutoCharactersShuffled)
  return narutoCharactersShuffled
    // console.log(a)
}

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [narutoCharacters, setNarutoCharacters] = useState(characterArray);
  let resetNow = 0;


  const setVisitedStatus = (id) =>{
    console.log(isVisitedAlready(id));
    // shuffleArray();
    setNarutoCharacters(narutoCharacters.map(character => {
      if(resetNow===0){
        if(character.id===id){
          console.log(character.id);
          // character.name=character.name;
          // character.id=character.id;
          // shuffleArray(narutoCharacters);
          if(character.visited>=1){
            resetGame();
          }
          character.visited+= 1;
        }
      }else{
        // shuffleArray(narutoCharacters);
        resetNow=0;
      }
        return character;
      })
    )
    console.log("From setVisitedStatus")
    console.log(narutoCharacters)
    // shuffleArray();
  }

  function resetGame(){
    console.log("Called reset Game");
    setNarutoCharacters(
      narutoCharacters.map(character =>(
        character.visited = 0
      ))
    );
    setCurrentScore(0);
    resetNow=1;
    console.log("From reset Game:",narutoCharacters[0],narutoCharacters[1]);
  }

  const isVisitedAlready = (id) =>{
    let visitedTimes = 0;
    narutoCharacters.forEach(character =>{
      if(character.id===id){
        console.log(character.visited)
        visitedTimes = character.visited
        if(character.visited>=1){
          console.log("Already visited");
          // resetGame();
          return true;
        }
        setCurrentScore(currentScore+1);
        if(currentScore>=bestScore){
          setBestScore(currentScore+1);
        }
        return false;
      }
    })
    return `Already visited ${visitedTimes} times`
  }

  function handleShuffle() {
    const changes = shuffleArray([...narutoCharacters]);
    setNarutoCharacters(changes);
    console.log("Shuffle", characterArray);
  }

  // const getCharacter = (id) =>{
  //   narutoCharacters.filter(character=>{
  //     if(character.id===id){
  //       console.log(character.name,character.id,character.visited);
  //     }
  //     return 0;
  //   })
  // }
  useEffect(() =>{
    const newArray = shuffleArray([...characterArray])
    console.log("From use effect");

    setNarutoCharacters([...newArray]);
  },[]);
  return (
    <div className="App">
      <Header currScore={currentScore} best={bestScore} className="header"/>
      <Items characters={narutoCharacters} setVisitedStatus={setVisitedStatus} handleShuffle={handleShuffle}/>
      {/* <div>
            {narutoCharacters.map(character =>(
                <Item key={character.id} setVisitedStatus={setVisitedStatus} character={character}/>
            ))} 
        </div> */}
    </div>
  );
}

export default App;
