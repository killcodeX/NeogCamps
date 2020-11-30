// Api URL
var url = 'https://api.funtranslations.com/translate/shakespeare.json';


// get variables
var translateButton = document.querySelector(".btn");

// read input
var translateInput = document.querySelector("#translate-input");

// show output
var translateOutput = document.querySelector(".box-size");


// event Handlers
translateButton.addEventListener("click", buttonClickHandler)


function buttonClickHandler(event) {
    console.log("button clicked", translateInput.value);
    var input = translateInput.value;
    var finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))
    
}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}