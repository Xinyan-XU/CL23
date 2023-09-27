//make sure js after html is fully loaded
//link js file to html

window.addEventListener('load', function () {
    console.log('page is loaded');
    this.fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(response => response.json())
        .then(data => {
            console.log(data.results[21].name);

            //get result array length
            //get a random num from array
            //display the result on page
            let pokeArray = data.results;
            let randomNumber = Math.floor(Math.random() * pokeArray.length)

            let pokeName = document.getElementById('pokemon-name');
            // pokeName.innerHTML = pokeArray[randomNumber].name;
            pokeName.innerHTML = data.results[randomNumber].name;
        })

    let button = document.getElementById('pokemon-button');
    button.addEventListener('click', function () {
        let inputText = document.getElementById("pokemon-name-type").value;

        console.log("button was clicked");
        console.log("the text is:" + inputText);

        let API_RUL = "http://pokeapi.co/api/v2/pokemon/" + inputText;
        fetch(API_RUL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let headingElement = document.getElementById('p-name');
                headingElement.innerHTML = data.name;
                let weightElement = document.getElementById('p-weight');
                weightElement.innerHTML = data.weight;
                let imageElement = document.getElementById('p-img');
                imageElement.src = data.sprites.front_default;

                let typeElement = document.getElementById('p-type');
                let types = data.types;
                console.log(data.types);
                for (let i = 0; i < data.types.length; i++) {
                    let elt = document.createElement('p');
                    elt.innerHTML = data.types[i].type.name;
                    typeElement.appendChild(elt);
                }

            })
            .catch(error => {
                console.log("error is:" + error);
                let headingElement = document.getElementById('p-name');
                headingElement.innerHTML = "not found try again";
                let weightElement = document.getElementById('p-weight');
                weightElement.innerHTML = "";
                let imageElement = document.getElementById('p-img');
                imageElement.src = "";
            })
    })

})

console.log("hello!");