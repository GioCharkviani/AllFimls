const mainContainer = document.getElementById('main-container');
const filmContainer = document.getElementById('film-container');
const searchFilmInner = document.getElementById('searched-film-inner');

const btnInput = document.querySelector('.btn-input');
const btnSearch = document.querySelector('.btn-search');

const navToggle = document.querySelector('.nav-toggle');
const vEllipsis = document.querySelector('.fa-ellipsis-v');
const hEllipsis = document.querySelector('.fa-ellipsis-h');

const navUl = document.querySelector('.nav-ul');
const headerMain = document.querySelector('.btn-header-main');

const filmsImg1 = document.querySelectorAll(".item1-image");
const filmsTitle1 = document.querySelectorAll(".item1-title");
const leftArrow1 = document.querySelector(".for-date-left");
const rightArrow1 = document.querySelector(".for-date-right");
const filmYear1 = document.querySelectorAll(".item1-year");

const filmsImg2 = document.querySelectorAll(".item2-image");
const filmsTitle2 = document.querySelectorAll(".item2-title");
const leftArrow2 = document.querySelector(".for-rate-left");
const rightArrow2 = document.querySelector(".for-rate-right");
const filmYear2 = document.querySelectorAll(".item2-year");

const items1 = document.querySelectorAll('.item1');
const items2 = document.querySelectorAll('.item2');

let count1 = 0;
let count2 = 0;

leftArrow1.addEventListener("click", function() {
    if(count1-5 > 0) {
        count1 -= 6;
        for(var i = 0; i < 5; i++) {
            let path = 'http://image.tmdb.org/t/p/w185/' + filmsByDate[count1].poster_path;
            filmsImg1[i].src = path;
            filmsTitle1[i].innerHTML = filmsByDate[count1].title;
            filmYear1[i].innerHTML = `Released: ${filmsByDate[count1].release_date.slice(0, 4)}`;
            items1[i].id = filmsByDate[count1].id;
            count1 += 1;
        }
        addOrDelclass(count1, 1);
        shorterTitle(filmsTitle1);
    }

});

leftArrow2.addEventListener("click", function() {
    if(count2-5 > 0) {
        count2 -= 6;
        for(var i = 0; i < 5; i++) {
            let path = 'http://image.tmdb.org/t/p/w185/' + filmsByRate[count2].poster_path;
            filmsImg2[i].src = path;
            filmsTitle2[i].innerHTML = filmsByRate[count2].title;
            filmYear2[i].innerHTML = `Released: ${filmsByRate[count2].release_date.slice(0, 4)}`;
            items2[i].id = filmsByRate[count2].id;
            count2 += 1;
        }
        addOrDelclass(count2, 2);
        shorterTitle(filmsTitle2);
    }

});

rightArrow1.addEventListener("click", function() {
    if(count1 < filmsByDate.length) {
        count1 -= 4;
        for(var i = 0; i < 5; i++) {
            let path = 'http://image.tmdb.org/t/p/w185/' + filmsByDate[count1].poster_path;
            filmsImg1[i].src = path;
            filmsTitle1[i].innerHTML = filmsByDate[count1].title;
            filmYear1[i].innerHTML = `Released: ${filmsByDate[count1].release_date.slice(0, 4)}`;
            items1[i].id = filmsByDate[count1].id;
            count1 += 1;
        }
        addOrDelclass(count1, 1);
        shorterTitle(filmsTitle1);
    }
});

rightArrow2.addEventListener("click", function() {
    if(count2 < filmsByRate.length) {
        count2 -= 4;
        for(var i = 0; i < 5; i++) {
            let path = 'http://image.tmdb.org/t/p/w185/' + filmsByRate[count2].poster_path;
            filmsImg2[i].src = path;
            filmsTitle2[i].innerHTML = filmsByRate[count2].title;
            filmYear2[i].innerHTML = `Released: ${filmsByRate[count2].release_date.slice(0, 4)}`;
            items2[i].id = filmsByRate[count2].id;
            count2 += 1;
        }
        addOrDelclass(count2, 2);
        shorterTitle(filmsTitle2);
    }
});

function addOrDelclass(x, y) {
    let arrowLeft;
    let arrowRight;
    let count = x;
    if(y==1) { arrowLeft = leftArrow1; arrowRight = rightArrow1; }
    else { arrowLeft = leftArrow2; arrowRight = rightArrow2; }

    if(count-5 <= 0) arrowLeft.classList.add("gray-arrow");
    else arrowLeft.classList.remove("gray-arrow");

    if(count >= filmsByDate.length) arrowRight.classList.add("gray-arrow");
    else arrowRight.classList.remove("gray-arrow");
}



// ----------For Long Title Film----------
function shorterTitle(films) {
    for(let i = 0; i < 5; i++) {
        if(films[i].textContent.length > 20) {
            films[i].textContent = films[i].textContent.slice(0, 20) + '...';
        }
    }
}

// -----select film-----
let choseFilm;
mainContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('st-img')) {
        filmById(e.path[1].id);
    }
    console.log(e.path[1].id);
});

searchFilmInner.addEventListener('click', function(e) {
    if(e.target.classList.contains('st-img')) {
        filmById(e.path[0].id);
    }
    btnInput.value = '';
    searchFilmInner.innerHTML = '';
});

// Search Films
let searchFilm;
btnInput.addEventListener('input', function() {
    searchFilm = btnInput.value;
    if(searchFilm.length > 1) {
        bySearch(searchFilm);
    }
    else {
        searchFilmInner.innerHTML = '';
    }

});

btnSearch.addEventListener('click', function() {
    if(searchFilm.length > 1) {
        filmById(filmsBySearch[0].id);
    }
});

// nav bar
navToggle.addEventListener('click', function() {
    navUl.classList.toggle('new-nav-ul');
    headerMain.classList.toggle('new-btn-header-main');
    vEllipsis.classList.toggle('hide');
    hEllipsis.classList.toggle('hide');
});