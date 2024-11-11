"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function survey_1() {
    let numberOfFilms;
    do {
        numberOfFilms = prompt("How many films have you already watched?", "");
    } while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms) || numberOfFilms <= 0 || numberOfFilms > 200);
    personalMovieDB.count = numberOfFilms;
}   

function survey_2() {
    for (let i = 0; i < personalMovieDB.count; i++) {
        let movieName,  
            movieRating;
        do {
            movieName = prompt("One of your last seen movies?", "");
        } while (movieName == null || movieName == "" || !isNaN(movieName) || movieName.length > 50);
        do {
            movieRating = prompt("How you will rate it on scale from 1 to 10?");
        } while (movieRating == null || movieRating == "" || isNaN(movieRating) || movieRating <= 0 || movieRating > 10)
        personalMovieDB.movies[movieName] = +movieRating;
    }
}

function survey_3() {
    for (let i = 0; i < 3; i++) {
        let genre;
        do {
            genre = prompt("Enter 3 your favourite genres", "");
        } while (genre == null || genre == "" || !isNaN(genre) || genre.length > 50);
        personalMovieDB.genres[i] = genre;
    }
}

function showMyDB() {
    if (personalMovieDB.private == true)
        console.log("Yoyr database is private!");
    else {
        console.log("This is your favourite movies:\n");
        for(let movie of Object.keys(personalMovieDB.movies))
            console.log(`   ${movie}, with rating of ${personalMovieDB.movies[movie]}\n`);
        console.log("This is your favourite actors:\n");
        for(let actor of Object.keys(personalMovieDB.actors))
            console.log(`   ${actor}\n`);
        console.log("This is your favourite genres:\n");
        for(let i = 1; i <= personalMovieDB.genres.length; i++)
            console.log(`   ${i}.${personalMovieDB.genres[i-1]}\n`);
    }
}   

survey_1();
survey_2();
survey_3();
showMyDB();
console.log(personalMovieDB.movies);


