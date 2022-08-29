function homePage()
{
  window.location.href = 'index.html';
}



function exploreBtn(country) {


    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(searchedCountry => searchContent(searchedCountry))
    // TODO Need to remove it



    function searchContent(countryName) {
      

        // TODO start 
        // !Giving Search Result...
        // Getting Parent Section
        const sectionDiv = document.getElementById('explore-section');
        

        // !Clear html before load another...
        const topSectionDiv = document.getElementById('country-section-div');
        topSectionDiv.innerHTML = ``;
        sectionDiv.innerHTML = ``;

        const div = document.createElement('div');

        div.classList.add('rounded', 'overflow-hidden', 'shadow-lg');


        // *Creating Card start
        div.innerHTML = `<img class="w-full" src="${countryName[0].flags.svg}" alt="Mountain">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-center">${countryName[0].name.common}</div>
      <p class="text-gray-700 font-semibold">
        <span class="font-bold text-blue-700">continents: </span> ${countryName[0].continents[0]}
      </p>
      
      <p class="text-gray-700 font-semibold">
        <span class="font-bold text-blue-700">Population: </span> ${countryName[0].population}
      </p>
      <p class="text-gray-700 font-semibold">
        <span class="font-bold text-blue-700">Timezones: </span> ${countryName[0].timezones}
      </p>
      
      <p class="text-gray-700 font-semibold">
        <span class="font-bold text-blue-700">Capital: </span> ${countryName[0].capital[0]}
      </p>
      
    </div>`;
        //* Creating Card End


        // Adding the div into the Div section... 
        sectionDiv.appendChild(div);
        // !Giving Search Result End */

    }



}


