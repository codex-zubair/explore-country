function homePage() {
    window.location.href = 'index.html';

}






const apiCalling = async () => {

    try {
        progressBar('0%');
        const sUrl = 'https://www.thesportsdb.com/api/v1/json/2/all_sports.php';
        progressBar('10%');
        const sResponse = await fetch(sUrl);
        progressBar('60%');
        const allSport = await sResponse.json();
        progressBar('100%');
        sportsItem(allSport.sports);


    }
    catch (error) {
        console.log(error);
    }

}




// ! Looping into all sport array.... by foreach...Start
function sportsItem(sportsList) {
    sportsList.forEach(element => {
        


        // !Start Pushing Inside Section
        // Getting Parent Section
        const sectionDiv = document.getElementById('country-section-div');



        const div = document.createElement('div');

        div.classList.add('rounded', 'overflow-hidden', 'shadow-lg');


        // Creating Card start
        div.innerHTML = `<img class="w-full h-36" src="${element.strSportThumb}" alt="Mountain">
    <div class="px-6 py-4">

    



      <div class="font-bold text-xl mb-2">${element.strSport}</div>
      <p class="text-gray-700 text-base">
         ${element.strSportDescription.slice(0, 30)}
      </p>
      <button onclick="seeMore('${element.strSportThumb}','${element.strSport}')" class="bg-blue-500 hover:bg-blue-600 exploreBtn text-white px-3 py-1 rounded-sm font-semibold mt-2">See More</button>
    </div>`;
        // Creating Card End


        // Adding the div into the Div section... 
        sectionDiv.appendChild(div);
        // !End Pushing Inside Section


    });

}
// ! Looping into all sport array.... by foreach...End













// !See More start
function seeMore(image,name) {



// !Getting Data And Finding The Name Start
// ----------------------------------------
const apiCalling = async () => {

    try {
        progressBar('0%');
        const sUrl = 'https://www.thesportsdb.com/api/v1/json/2/all_sports.php';
        progressBar('10%');
        const sResponse = await fetch(sUrl);
        progressBar('60%');
        const allSport = await sResponse.json();
        progressBar('100%');
        
        createExploreSection(allSport.sports,image,name);


    }
    catch (error) {
        console.log(error);
    }

}

apiCalling ();

// ----------------------------------------
// !Getting Data And Finding The Name END


// TODO Remove the Image
function createExploreSection(object,image,name)
{
    
    object.forEach((sport)=> {
        if(sport.strSport == name)
        {
            
    // TODO start 
    // !Giving Search Result...
    // Getting Parent Section
    const sectionDiv = document.getElementById('explore-section');


    // !Clear html before load another...
    const topSectionDiv = document.getElementById('country-section-div');
    topSectionDiv.innerHTML = ``;
    sectionDiv.innerHTML = ``;




    // !Start Pushing Inside Section
    const div = document.createElement('div');

    div.classList.add('rounded', 'overflow-hidden', 'shadow-lg');


    // Creating Card start
    div.innerHTML = `<img class="w-full" src="${sport.strSportThumb}" alt="game">
    <div class=" w-full py-4">

    



      <div class="font-bold text-xl mb-2">${sport.strSport}</div>
      <p class="text-gray-700 text-base">
         ${sport.strSportDescription}
      </p>
     
    </div>`;
    //* Creating Card End


    // Adding the div into the Div section... 
    sectionDiv.appendChild(div);
    // !Giving Search Result End */
        }


   


    })


}


}
// !See More End





















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



apiCalling();