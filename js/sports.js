function homePage() {
    window.location.href = 'index.html';

}


onLoadIndex = async () => {
    try {

        progressBar('0%');
        const url = ('https://restcountries.com/v3.1/all');
        progressBar('10%');
        const response = await fetch(url);
        progressBar('60%');
        const allCountry = await response.json();
        progressBar('100%');
        countries(allCountry);

    }
    catch (error) {
        console.log(error);
    }


}
// Calling Country Data From API END






// ! Progress Bar Start...


function progressBar(progressBarValue) {

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = progressBarValue;
    progressBar.innerText = progressBarValue;



    if (progressBarValue == '100%') {
        progressBar.innerText = '';
    }
}

// ! Progress Bar End...



onLoadIndex();