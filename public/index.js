window.addEventListener('DOMContentLoaded', function () {
    var searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', doSearch);
    }
});

function doSearch () {
    console.log("Clicked");
    var searchQuery = document.getElementById('search-input').value;
    console.log(searchQuery);
    window.location.href = "/"+searchQuery;
}