'use strict';

let numberOfFilms = prompt("How many movies did you watch?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt("What was your las movie?");
let b = prompt("How do yo rate it? (From 1 to 10)", "5");
let c = prompt("What was your las movie?");
let d = prompt("How do yo rate it? (From 1 to 10)", "5");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



