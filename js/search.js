
// !Search System Start...

// getting input value...
const inputField = document.getElementById('input-field');


document.getElementById('search-btn').addEventListener('click', () => {
    if (isNaN(inputField.value)) {
        // Getting input Field into lowercase
        const value = inputField.value.toLowerCase();
        console.log(value);

        // Empty Input value
        inputField.value = '';



        fetch(`https://restcountries.com/v3.1/name/${value}`)
            .then(response => response.json())
            .then(searchedCountry => searchContent(searchedCountry))
        // TODO Need to remove it




        //* Search Content Start
        function searchContent(country) {




            // *Checking Status
            if (country.message) {
                alert("Not Found");
            }

            else {
                // TODO start 
                // !Giving Search Result...
                // Getting Parent Section
                const sectionDiv = document.getElementById('country-section-div');
                sectionDiv.innerHTML = ``;


                const exploreSection = document.getElementById('explore-section');
                exploreSection.innerHTML = ``;


                const div = document.createElement('div');

                div.classList.add('rounded', 'overflow-hidden', 'shadow-lg');


                // *Creating Card start
                div.innerHTML = `<img class="w-auto" src="${country[0].flags.svg}" alt="Mountain">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${country[0].name.common}</div>
      <p class="text-gray-700 text-base">
        <span>Capital: </span> ${country[0].capital[0]}
      </p>
      <button onclick="exploreBtn('${country[0].name.common}')" class="bg-blue-500 hover:bg-blue-600  text-white px-3 py-1 rounded-sm font-semibold mt-2">Explore</button>
    </div>`;
                //* Creating Card End


                // Adding the div into the Div section... 
                sectionDiv.appendChild(div);
                // !Giving Search Result End



            }


        }
        //* Search Content End

    }
    else {
        alert("Please Provide Only Name!")
        inputField.value = '';
    }
})