'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies did you watch?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies did you watch?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
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
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Not many movies.");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("You are a classical viewer");
    } else if (personalMovieDB.count >=30) {
        alert("You are a maniac!");
    } else {
        alert("Something went wrong.");
    }
}

detectPersonalLevel();



function showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`What is your favourite genre number ${i}`);  
    }
}

writeYourGenres();