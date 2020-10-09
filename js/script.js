/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded',() => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Во все тяжкие"
        ]
    };
    
    
    const promo = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        mainContent = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type=checkbox]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newFilm = addInput.value;
        const favorite = checkbox.checked;
        
        if (newFilm) {
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        };
        
        
        e.target.reset();
        // function checkLenght() {
        //     if (newFilm.lenght >= 21) {
        //         newFilm.slice(20);

        //     };
        // };
    });    

    
    


    const deleteAdv = (arr) => {
        arr.forEach(item => {
        item.remove();
    });
    };
      
    
    
    const makeChanges = () => {
        genre.textContent = "Драма";
        mainContent.style.background = "url('/img/bg.jpg')";
    };
    
    
    
    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        movieList.innerHTML = "";
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film} 
                <div class="delete"></div>
                </li>
            `;
        });
    };
        
    

    // movieList.innerHTML = "";
    deleteAdv(promo);
    makeChanges();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);

    
});