const getAllSpells = () =>{
    return [
        {
            name: "Turn enemy into a newt",
            isEvil: true,
            energyRequired: 5.1
        },
        {
            name: "Conjure some gold for a local charity",
            isEvil: false,
            energyRequired: 2.99
        },
        {
            name: "Give a deaf person the ability to heal",
            isEvil: false,
            energyRequired: 12.2
        },
        {
            name: "Make yourself emperor of the universe",
            isEvil: true,
            energyRequired: 100.0
        },
        {
            name: "Convince your relatives your political views are correct",
            isEvil: false,
            energyReqired: 2921.5
        }
    ]
}

const makeGoodSpellBook = () =>{
    const goodSpells =[]
    const spells = getAllSpells();
    const goodBook = {
        title: "Good Book",
        spells: []
    }

    for(const spell of spells){
        if(!spell.isEvil){
            goodSpells.push(spell)
        }
    }
    goodBook.spells = goodSpells;

    return goodBook;

}

const makeEvilSpellBook = () =>{
    const evilSpells =[]
    const spells = getAllSpells();
    const evilBook = {
        title: "Evil Book",
        spells: []
    }

    for(const spell of spells){
        if(spell.isEvil){
            evilSpells.push(spell)
        }
    }

    evilBook.spells = evilSpells;

    return evilBook;
}

const displaySpellBook = (spellBook) =>{
    console.log(spellBook.title);

    for(const spell of spellBook.spells){
        console.log(spell.name);
    }
}

const greeting = () =>{
    console.log("Do you believe in magic?");
    console.log("------------------------");
}

const runProgram = () =>{
    const evilSpellBook = makeEvilSpellBook();
    const goodSpellBook = makeGoodSpellBook();

    displaySpellBook(goodSpellBook);
    console.log(" ");
    displaySpellBook(evilSpellBook);
}

greeting();
runProgram();