// getting input value...
const inputField = document.getElementById('input-field');


document.getElementById('search-btn').addEventListener('click',()=>{
    if(isNaN(inputField.value))
    {
        // Getting input Field into lowercase
        const value = inputField.value.toLowerCase();
        console.log(value);

        // Empty Input value
        inputField.value = '';



        fetch(`https://restcountries.com/v3.1/name/${value}`)
        .then(response => response.json())
        .then(searchedCountry=> console.log(searchedCountry))




    }
    else
    {
        alert("Please Provide Only Name!")
        inputField.value = '';
    }
})