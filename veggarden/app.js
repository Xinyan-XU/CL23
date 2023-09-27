window.addEventListener('load', function () {
    console.log('page loaded!');

    // // fetch random plants?
    // fetch("https://openfarm.cc/api/v1/crops/")
    //     .then(response => response.json())
    //     .then(data => {
    //         let randomNum = Math.floor(Math.random() * data.data.length);
    //         let randomPlant = data.data[randomNum];
    //         console.log(data);
    //         console.log(data.data.length);
    //         console.log('random?' + randomPlant);
    //     })

//  <h3 id="p_bio_name">Biomial Name: </h3>
// <p id="p_info"></p>
// <p id="p_growingdays"></p>
// <p id="p_suncond"></p>
// <img id="p_img" />

    let button = document.getElementById('plant_search');
    button.addEventListener('click', function () {
        let inputText = document.getElementById('plant_name_type').value;

        console.log('button clicked');
        console.log('the text input is: ' + inputText);

        let API_URL = "https://openfarm.cc/api/v1/crops/" + inputText;
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                let bioName = document.getElementById('p_bio_name');
                bioName.innerHTML = 'Biomial Name: ' + data.data.attributes.binomial_name;

                let plantInfo = document.getElementById('p_info');
                plantInfo.innerHTML = "Brief Intro: " + data.data.attributes.description;

                let growDays = document.getElementById('p_growingdays');
                growDays.innerHTML = 'Growing Days: ' + data.data.attributes.growing_degree_days;

                let sunCond = document.getElementById('p_suncond');
                sunCond.innerHTML = 'Growing Days: ' + data.data.attributes.sun_requirements;

                let pImg = document.getElementById('p_img');
                pImg.src = data.included[0].attributes.small_url;

                console.log(data.data.attributes.binomial_name);
                console.log(data.data.attributes.description);
                console.log(data.data.attributes.growing_degree_days);
                console.log(data.data.attributes.sun_requirements);
                console.log(data.data.attributes.main_image_path);
            

            })
    })
});

console.log('hello!');
