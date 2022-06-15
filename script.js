'use strict';

let numberOfFilms = prompt("How many movies did you watch?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("What was your last movie?");
    let b = prompt("How do yo rate it? (From 1 to 10)", "5");
    
    

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("Done!");
    } else {
        console.log("Error!");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert("Not many movies.");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("You are a classical viewer");
} else if (personalMovieDB.count >=30) {
    alert("You are a maniac!");
} else {
    alert("Something went wrong.");
}

console.log(personalMovieDB);



