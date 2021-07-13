var searchBtn = document.querySelector('#searchBtn');
var queryInput = document.querySelector('#query');
var topicSelect = document.querySelector('#topic');


var getSearchResults = function (event) {
    event.preventDefault();
    console.log("getting search results....");
//handle search btn result    
    var query = queryInput.value;
    var topic = topicSelect.value;
    console.log(query, topic);
    location.href=`search-results.html?query=${query}&topic=${topic}`;
}



// /* function to fetch API*/

// /* when we search, find keywords within LOC database 



searchBtn.addEventListener("click", getSearchResults);


//function to get the params


