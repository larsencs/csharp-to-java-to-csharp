console.log("Let's roll some dice, baby!");
console.log("---------------------------");

const diceRoll = () =>{
    const dieValue = Math.floor(Math.random()*6);

    return die(dieValue);

}

const die = (value) =>{
    switch(value){
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";

    }
}

const playGame = () =>{
    firstDie = diceRoll();
    secondDie = diceRoll();

    console.log(firstDie)
    console.log(secondDie)
}

playGame();
