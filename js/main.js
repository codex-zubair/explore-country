// Calling Country Data From API Start

  // !Loading the HTML.index file at first....
  


function onLoadIndex()
{
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
      <button onclick="exploreBtn('${country.name.common}')" class="bg-blue-500 hover:bg-blue-600 exploreBtn text-white px-3 py-1 rounded-sm font-semibold mt-2">Explore</button>
    </div>`;
    // Creating Card End


    // Adding the div into the Div section... 
    sectionDiv.appendChild(div);

  }



}





// !On load Calling...
onLoadIndex();









// Calling Sports page
function sports()
{
    // window.location.href = index.html;
    window.location.href = 'sports.html'
}





