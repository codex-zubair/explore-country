// Calling Country Data From API Start

function fetchFunction() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(allCountry => countries(allCountry))

}
// Calling Country Data From API END









// Getting ALl Values From API Start
function countries(allCountry) {
    for (country of allCountry) {

         // Getting Parent Section
    const sectionDiv = document.getElementById('country-section-div');
    

    const div = document.createElement('div');

    div.classList.add('rounded', 'overflow-hidden', 'shadow-lg');


    // Creating Card start
    div.innerHTML = `<img class="w-full h-36" src="${country.flags.svg}" alt="Mountain">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${country.name.common}</div>
      <p class="text-gray-700 text-base">
        <span>Capital: </span> ${country.capital[0]}
      </p>
      <button class="bg-blue-500 hover:bg-blue-600  text-white px-3 py-1 rounded-sm font-semibold mt-2">Explore</button>
    </div>`;
    // Creating Card End


    // Adding the div into the Div section... 
    sectionDiv.appendChild(div);
       
    }

   

}
// Getting ALl Values From API END









// Creating Element And Storing Data...
function check() {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(allCountry => console.log(allCountry))
}

