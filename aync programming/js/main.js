(async function(params) {
    let response = await fetch('http://forkify-api.herokuapp.com/api/search?&q=beef');
    let responseData = await response.json();
    console.log(responseData.recipes);
})();