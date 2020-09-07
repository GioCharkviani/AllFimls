let filmsByDate = [];
let filmsByRate = [];
let filmsBySearch = [];

function byDate () {
    let xhr = new XMLHttpRequest();

    // by date
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/upcoming?api_key=b3f6943861498b97473f8ab6fbdd1764&language=en-US&page=1', true);

    xhr.onload = function() {
        if(this.status == 200) {
            let newFilms = JSON.parse(this.responseText);
            filmsByDate =  [...newFilms.results];
            console.log(newFilms);
            for(let i = 0; i < 5; i++) {
                let path = 'http://image.tmdb.org/t/p/w185/' + filmsByDate[count1].poster_path;
                filmsImg1[i].src = path;
                filmsTitle1[i].innerHTML = filmsByDate[count1].title;
                filmYear1[i].innerHTML = `Released: ${filmsByDate[count1].release_date.slice(0, 4)}`;
                items1[i].id = filmsByDate[count1].id;
                count1 += 1;
            }
            shorterTitle(filmsTitle1);
        }
        else {
            document.getElementById('main-container').innerHTML = '<h1>ERROR: ' + this.status + '</h1>';
        }
    };
    xhr.send();
}
    
byDate();


function byRate () {
    let xhr = new XMLHttpRequest();

    // by rate
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/top_rated?api_key=b3f6943861498b97473f8ab6fbdd1764&language=en-US&page=1', true);

    xhr.onload = function() {
        if(this.status == 200) {
            let newFilms = JSON.parse(this.responseText);
            filmsByRate = [...newFilms.results];

            for(let i = 0; i < 5; i++) {
                let path = 'http://image.tmdb.org/t/p/w185/' + filmsByRate[count2].poster_path;
                filmsImg2[i].src = path;
                filmsTitle2[i].innerHTML = filmsByRate[count2].title;
                filmYear2[i].innerHTML = `Released: ${filmsByRate[count2].release_date.slice(0, 4)}`;
                items2[i].id = filmsByRate[count2].id;
                count2 += 1;
            }
            shorterTitle(filmsTitle2);
        }
        else {
            document.getElementById('main-container').innerHTML = '<h1>ERROR: ' + this.status + '</h1>';
        }
    };
    xhr.send();
}

byRate();


function bySearch (filmsName) {
    let xhr = new XMLHttpRequest();

    //by search
    xhr.open('GET', 'https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query='+filmsName+'&language=en-US&api_key=b3f6943861498b97473f8ab6fbdd1764', true);

    xhr.onload = function() {
        if(this.status == 200) {
            let newFilms = JSON.parse(this.responseText);
            filmsBySearch = [...newFilms.results];
            
            searchFilmInner.innerHTML = '';

            let c=0;
            if(filmsBySearch.length > 0) {
                filmsBySearch.forEach(film => {
                    if(c<5) {
                        let newImg = document.createElement('img');
                        newImg.classList.add('st-img', 'searsh-new-img');
                        newImg.src = 'http://image.tmdb.org/t/p/w185/' + film.poster_path;
                        newImg.id = film.id;

                        searchFilmInner.appendChild(newImg);
                        c++;
                    }
                });
            }
        }
        else {
            document.getElementById('main-container').innerHTML = '<h1>ERROR: ' + this.status + '</h1>';
        }
    };
    xhr.send();
}
