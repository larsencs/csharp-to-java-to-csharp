console.log("Let's roll some dice, baby!");
console.log("---------------------------");

const diceRoll = () =>{
    const dieValue = getRandomInt(1,6);
    return convertToWord(dieValue);
}

const convertToWord = (value) =>{
    switch(value){
        case 1:
            return ["one", value];
        case 2:
            return ["two", value];
        case 3:
            return ["three", value];
        case 4:
            return ["four", value];
        case 5:
            return ["five", value];
        case 6:
            return ["six", value];
        case 7:
            return ["seven", value];
        case 8:
            return ["eight", value];
        case 9:
            return ["nine", value];
        case 10:
            return ["ten", value];
        case 11:
            return ["eleven", value];
        case 12:
            return ["twelve", value];
    }
}

const playGame = () =>{

    for(let i = 0; i< 10; i++){
       const firstDie = diceRoll();
       const secondDie = diceRoll();
        let message = `${firstDie[0]} + ${secondDie[0]} = ${convertToWord(firstDie[1] + secondDie[1])[0]}`

        if(firstDie[1] === secondDie[1]){
            message += ". DOUBLES!"
        }
        console.log(message)
    }
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

playGame();
