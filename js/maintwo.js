
// selektujemo element na koji cemo da kliknemo i napravimo EVENT 1
var searchButton = document.querySelector('.search-container button');

// selektujemo dugme za EVENT 2
var randomButton = document.querySelector('.random');

// selektujemo element gde cemo stavljati slike
var imageList = document.querySelector('.image-list')

// selektujemo LOADER


// selektujemo polje koje izbacuje sliku i info



// f-ja kojom cemo pretrazivati vrednosti u polju SEARCH
function onSearch() {
    // selektujemo polje INPUT u koje unosimo pojmove za pretragu
    var searchField = document.querySelector('.search');
    // definisemo to polje dodajuci mu vrednost
    searchField.value && getCat(searchField.value);
    // da bi ispraznili polje prilikom nove pretrage
    searchField.value = "";
}


function getCat(searchValue) {
    var request = new XMLHttpRequest();

    var url = 'https://api.thecatapi.com/v1/images/search?breed_id=' + searchValue;
    // var url = 'https://api.thecatapi.com/v1/breeds/search?q=' + searchValue
    request.open("GET", url);
    request.setRequestHeader("key", "2caee240-7fbc-45c7-b8da-a9c119a68522");

    request.onload = function() {
        listInfo(JSON.parse(request.responseText));
        // var data = (JSON.parse(request.responseText));
        // console.log(data)
    }
    request.send();
}


function listInfo(catData) {
    imageList.innerHTML = '';
    catData.forEach(function(data, i) {
        addData(data, i)
        console.log(catData)
    })
}

function addData(data, i) {
    var imageElement = document.createElement('div');
    imageElement.classList.add('cat');

    var img = '<img src="' + data.url + '" />';
    var name = '<h3>' + data.breeds[i].name + '</h3>'
    var desc = '<p>' + data.breeds[i].description + '</p>';
    var a = '<a href="' + data.breeds[i].wikipedia_url + '">Wikipedia</a>'

    imageElement.innerHTML = img + name + desc + a;

    imageList.appendChild(imageElement);

    var cat = document.querySelector('.cat');
    var loader = document.querySelector('#load');

    cat.style.display = "none";
    loader.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";
        cat.style.display = "block";
    }, 2000)
}



function getRandom() {
    setInterval(function() {
        onSearch();
    }, 5000)
}





// init
searchButton.addEventListener('click', onSearch);
