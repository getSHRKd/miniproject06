console.log(location);
let parameters = location.search.split("&")
console.log(parameters)
let query = parameters[0].split("=")[1];
let topic = parameters[1].split("=")[1];
console.log(query, topic)

fetch(`https://www.loc.gov/search/?fo=json&q=${query}`)
    .then(function(response){
        return response.json()
    }) 
    .then(function(data){
        console.log(data)
    })