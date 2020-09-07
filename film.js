//film by id
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=b3f6943861498b97473f8ab6fbdd1764&language=en-US

function filmById (id) {
    let xhr = new XMLHttpRequest();

    // film by id
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/'+id+'?api_key=b3f6943861498b97473f8ab6fbdd1764&language=en-US', true);

    xhr.onload = function() {
        if(this.status == 200) {
            let film = JSON.parse(this.responseText);

            searchFilmInner.innerHTML = '';

            mainContainer.classList.add('hide');
            filmContainer.classList.remove('hide');

            let img = document.querySelector('.chose-film');
            img.src = 'http://image.tmdb.org/t/p/w185/' + film.poster_path;

            document.querySelector('.film-title').innerHTML = '<span class="black-h1">Title:</span> '+ film.title;
            document.querySelector('.film-gerne').innerHTML = '<span class="black-p">Gerne:</span> ' + film.genres[0].name;
            document.querySelector('.film-year').innerHTML = '<span class="black-p">Release Date:</span> ' + film.release_date;
            document.querySelector('.film-runtime').innerHTML = '<span class="black-p">Runtime:</span> ' + film.runtime + 'min';
            document.querySelector('.film-country').innerHTML = '<span class="black-p">Country:</span> ' + film.production_countries[0].iso_3166_1;
            document.querySelector('.film-language').innerHTML = '<span class="black-p">Language:</span> ' + film.original_language;
            document.querySelector('.film-rating').innerHTML = '<span class="black-p">Rating:</span> ' + film.vote_average + '(' + film.vote_count + ')';
            document.querySelector('.film-overview').innerHTML = '<span class="black-p">Overview:</span> ' + film.overview;

        }
        else {
            document.getElementById('main-container').innerHTML = '<h1>ERROR: ' + this.status + '</h1>';
        }
    };
    xhr.send();
}