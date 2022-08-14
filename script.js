'use strict';


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many movies did you watch?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies did you watch?", "");
        }
        },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("What was your last movie?").trim();
            let b = prompt("How do yo rate it? (From 1 to 10)", "5");
                
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("Done!");
            } else {
                console.log("Error!");
                i--;
            }
        }
        },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Not many movies.");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("You are a classical viewer");
        } else if (personalMovieDB.count >=30) {
            alert("You are a maniac!");
        } else {
            alert("Something went wrong.");
        }
        },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
        },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`What is your favourite genre number ${i}`);

            if(genre === '' || genre == null) {
                console.log("You entered incorrect or wrong data!");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Favourite genre ${i + 1} is ${item}`);
            });           
        }
    },
    toggleVisibleMyDB: function() {
        return (personalMovieDB.privat === false ? personalMovieDB.privat = true : personalMovieDB.privat = false);
    }

};

