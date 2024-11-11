"use strict";

const numberOfFilms = prompt("How many films have you already wached?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// let movieName = prompt("One of your last seen movies?");
// let movieRating = prompt("How you will rate it on scale from 1 to 10?");

// personalMovieDB.movies[movieName] = +movieRating;
// console.log(personalMovieDB.movies);

personalMovieDB.movies[prompt("One of your last seen movies?")] = +prompt("How you will rate it on scale from 1 to 10?");
console.log(personalMovieDB.movies);

