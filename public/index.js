/*search function*/
window.addEventListener('DOMContentLoaded', function () {
    var searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', doSearch);
    }

    var songChoice = document.getElementsByClassName('song');
    if(songChoice){
        for(var i = 0; i < songChoice.length; i++){
            (function(index){
                songChoice[i].onclick = function(){
                    doFeatures(index);
                }
            })(i);
        }
    }
});

function doSearch () {
    console.log("Clicked");
    var searchQuery = document.getElementById('search-input').value;
    console.log(searchQuery);
    window.location.href = "/"+searchQuery;
}

/*clickable song cards*/
function doFeatures (index){
    console.log("Song at ", index);
    window.location.href = "/features/"+index;
}