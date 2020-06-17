import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */




const finalHome = fifaData.filter((index) => {
return index.Year === 2014;
});
console.log(finalHome);

finalHome.forEach(function(item){
    console.log(item["Home Team Name"])
});

    
//console.log(`Away Team Name for 2014 world cup final`);
finalHome.forEach(function(item){
    console.log(item["Away Team Name"])
});

//console.log(`Away Team goals for 2014 world cup final`);
finalHome.forEach(function(item){
    console.log(item["Away Team Goals"])
});

finalHome.forEach(function(item){
    console.log(item["Home Team Goals"])
});

finalHome.forEach(function(item){
    console.log(item["Win conditions"])
});




/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with 
only finals data */
//function getFinals 

const getFinals = fifaData.filter((data) => {
    return data.Stage === "Final";
    });
    console.log(getFinals); 


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and 
returns an array called `years` containing all of the years in the dataset */


function getYears(getFinals){
        const years = fifaData.map(function(item){
            return item.Year;
    });
console.log(years);
}
    getYears(getFinals);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function 
`getFinals()` and determine the winner (home or away) of each `finals` game. Return the name 
of all winning countries in an array called `winners` */ 
 
function getWinners(){
     
    const homeWinners = getFinals.filter(function(item){
   return (item["Home Team Goals"] > item["Away Team Goals"])
   
});
//console.log(homeWinners);
const homeTeams = homeWinners.map(function(item){
return item["Home Team Name"]
});
const awayWinners = getFinals.filter(function(item){
     return(item["Away Team Goals"] > item["Home Team Goals"])
     
});
const awayTeams = awayWinners.map(function(item){
    return item["Away Team Name"]
});

//console.log(awayWinners);

const winners = [homeTeams, awayTeams]
return(winners)
 }
console.log(getWinners())



/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following 
parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */



function getWinnersByYear(callback1, callback2) {
    let finalTally = [];
    const year = (list, callback1) => {
        for(let i = 0; i < list.length; i++){
            callback1(list[i], i);
        }
    };
    const country = (list, callback2) => {
        for (let i = 0; i < list.length; i++){
            callback2(list[i], i);
        }
    }
        finalTally.push(`In ${year}, ${country} won the World Cup!`)
};

getWinnersByYear(getYears, getWinners);


/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average 
number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
const goals = data.reduce(function(acc, index){
    let homeTotal = acc + index["Home Team Goals"];
    
    let awayTotal = index["Away Team Goals"];
  
   return homeTotal + awayTotal 
   
}, 0);
    let average = goals/data.length;
    return average
}
console.log(getAverageGoals(getFinals));



/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
