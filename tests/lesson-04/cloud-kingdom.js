// 1

let playerName = "Mario";
let currentLives = 3;

const coins = {
    "level 1" : 25,
    "level 2" : 30,
    "level 3" : 45
};

let total = 0;
for (let key in coins){
    total +=coins[key];
}
console.log (total);

let medium = total/3;
console.log(medium);

