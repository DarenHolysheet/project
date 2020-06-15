'use strict';

let NumberOfFilms;

function start() {
    NumberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

    while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)) {
        NumberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    }
}

start();

const PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
              b = prompt('На сколько оцените его?', '');
            
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            PersonalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (PersonalMovieDB.count <= 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (PersonalMovieDB.count > 10 && PersonalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (PersonalMovieDB.count > 100) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();


function ShowMyDB(hidden) {
    if (!hidden) {
        console.log(PersonalMovieDB);
    }
}

ShowMyDB(PersonalMovieDB.privat);

function FavGenres () {
    for (let i = 1; i < 4; i++) {
        PersonalMovieDB.genres[i - 1] = prompt(`Какой ваш любимый жанр под номером ${i}`);
    }
}

FavGenres();