import React from "react";

export const StoreContext = React.createContext(null);

// useContext for navbar
function StoreProvider({ children }) {
  // Players
  const [playerOne, setPlayerOne] = React.useState(-1);
  const [playerTwo, setPlayerTwo] = React.useState(-1);
  const [playerThree, setPlayerThree] = React.useState(-1);
  const [playerFour, setPlayerFour] = React.useState(-1);
  // Questions
  const [questionOne, setQuestionOne] = React.useState(-1);
  const [questionTwo, setQuestionTwo] = React.useState(-1);
  const [questionThree, setQuestionThree] = React.useState(-1);
  const [questionFour, setQuestionFour] = React.useState(-1);

  const [score, setScore] = React.useState(0);
  const [gameMode, setGameMode] = React.useState(0);
  const [round, setRound] = React.useState(0);
  const [numCards, setNumCards] = React.useState(0);
  const [difficulty, setDifficulty] = React.useState("");
  const [cc, setCC] = React.useState("");

  const store = {
    playerOne: [playerOne, setPlayerOne],
    playerTwo: [playerTwo, setPlayerTwo],
    playerThree: [playerThree, setPlayerThree],
    playerFour: [playerFour, setPlayerFour],

    questionOne: [questionOne, setQuestionOne],
    questionTwo: [questionTwo, setQuestionTwo],
    questionThree: [questionThree, setQuestionThree],
    questionFour: [questionFour, setQuestionFour],

    score: [score, setScore],
    gameMode: [gameMode, setGameMode],
    round: [round, setRound],
    numCards: [numCards, setNumCards],

    difficulty: [difficulty, setDifficulty],
    cc: [cc, setCC],
    
    animalImagesWhite: [ 
        'dogWhite.png',
        'dolphinWhite.png',
        'lionWhite.png',
        'monkeyWhite.png',
        'sheepWhite.png',
        'squirrelWhite.png'
    ],
    animalImagesBlack: [ 
        'dogBlack.png',
        'dolphinBlack.png',
        'lionBlack.png',
        'monkeyBlack.png',
        'sheepBlack.png',
        'squirrelBlack.png'
    ],

    cards: [ 
      '1.png', 
      '2.png', 
      '3.png', 
      '4.png',
      '5.png',
      '6.png',
      '7.png', 
      '8.png', 
      '9.png'
    ],

    characters: [
      'cat.png',
      'cloud.png',
      'coco.jpeg',
      'dolphy.png',
      'eco-hulk.jpeg',
      'ernst.jpeg',
      'everett.jpeg',
      'frederique.jpeg',
      'honey-bee.png',
      'lucy.jpeg',
      'monique.jpeg',
      'nathan.jpeg',
      'queen-bee.jpeg',
      'simba.jpeg', 
      'super-heroine.jpeg', 
      'vincent.jpeg', 
      'wolf.jpeg', 
      'zoe.jpeg'
    ],

    criteria: [
      '0.png',
      '1.png', 
      '2.png', 
      '3.png', 
      '4.png',
      '5.png',
      '6.png',
      '7.png', 
      '8.png', 
      '9.png',
      '10.png',
      '11.png'
    ],

    questions: [ 
      '1.png', 
      '2.png', 
      '3.png', 
      '4.png',
      '5.png',
      '6.png',
      '7.png', 
      '8.png', 
      '9.png',
      '10.png',
      '11.png', 
      '12.png', 
      '13.png', 
      '14.png',
      '15.png',
      '16.png',
      '17.png', 
      '18.png', 
      '19.png',
      '20.png',
      '21.png', 
      '22.png', 
      '23.png', 
      '24.png',
      '25.png',
      '26.png',
      '27.png', 
      '28.png', 
      '29.png',
      '30.png'
    ],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export default StoreProvider;
