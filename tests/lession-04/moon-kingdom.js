// 1

function createCharacters (){
const characters = [
    { name : "Tom", level: 1, health: 100} ,
    { name : "Bin", level: 2, health: 150},
    { name : "Ann", level: 3, health: 200}
]

const charactersPowerUp = characters.map(character => 
(
    {
        name: character.name.toUpperCase(),
        level: character.level*2,
        health: character.health*2
    }
)
);

const possibleWinners = characters.filter(character => character.health > 100);

console.log(characters);
console.log(charactersPowerUp);
console.log(possibleWinners)


}

//2

function printLeaderboard (){
    const players = [
        { name: "Mario" , score: 100 },
        { name: "Luigi" , score: 200 },
        { name: "Nobita" , score: 300 },
        { name: "Yoshi" , score: 400 },
        { name: "Conan" , score: 500 }

    ];

    players.sort((a,b) => b.scores - a.scores);

console.log(players)
}
