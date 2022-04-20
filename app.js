const cities = document.querySelectorAll("svg path");
 
// loop for adding event to all map elements 
for (var i = 0; i < cities.length; i++) {
    const currentCity = cities[i];
 
    // add click event
    currentCity.addEventListener("click", function (event) {
        const thisElement = event.target;
        const cityData = {
            "city": thisElement.getAttribute("title"),
            "cityLabel": thisElement.children[0].innerHTML
        }
 
        console.log(cityData)
    });
 
}