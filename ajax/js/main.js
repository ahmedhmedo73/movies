var myHttp = new XMLHttpRequest();
var movies;
myHttp.open("GET", "https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50");
myHttp.send();
myHttp.addEventListener("readystatechange", function() {
    if (myHttp.readyState == 4) {
        movies = JSON.parse(myHttp.response).results;
        displayPosts();
    }
});

function displayPosts() {
    var cartoona = ``;
    for (let i = 0; i < movies.length; i++) {
        cartoona += `
        <div class="col-md-2">
           <img src="http://image.tmdb.org/t/p/w500${movies[i].poster_path}" class="w-100"/>
           <h2>${movies[i].title}</h2>
           <p>${movies[i].overview.split(" ").slice(0,10).join(" ")}</p>
        </div>`;
    }
    document.getElementById('rowData').innerHTML = cartoona;
}