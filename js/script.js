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
        checkbox = addForm.querySelector('[type=checkbox]'),
        h1Title = document.querySelector('.promo__title');
    
    h1Title.addEventListener('click', () => {
        if (mainContent.classList.contains('promo__bg')) {
            console.log(mainContent.classList);
            mainContent.classList.replace('promo__bg','promo__bg_alt');
        }
        else {
            console.log(mainContent.classList);
            mainContent.classList.replace('promo__bg_alt','promo__bg');
        };
        
    });    
    // console.log(mainContent.classList.item(1));
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
        
            };
            if (favorite) {
                console.log('Добавили любимый фильм');
            };
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        };
        
        
        e.target.reset();
        
    });    

    
    


    const deleteAdv = (arr) => {
        arr.forEach(item => {
        item.remove();
    });
    };
      
    
    
    const makeChanges = () => {
        genre.textContent = "Драма";
        
    };
    
    
    
    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        movieList.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film} 
                <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll(`.delete`).forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movieList);
            });
        });
    };
        
    

    // movieList.innerHTML = "";
    deleteAdv(promo);
    makeChanges();
    
    createMovieList(movieDB.movies, movieList);

    
});