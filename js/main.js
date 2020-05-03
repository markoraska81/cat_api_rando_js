

// selektujemo element na koji cemo da kliknemo i napravimo EVENT
var searchButton = document.querySelector('.search-container button');



// selektujemo element gde cemo stavljati slike
var imageList = document.querySelector('.image-list')


// definisemo KEY
var key = '2caee240-7fbc-45c7-b8da-a9c119a68522'


// f-ja kojom cemo pretrazivati vrednosti u polju SEARCH
function onSearch() {
    // selektujemo polje INPUT u koje unosimo pojmove za pretragu
    var searchField = document.querySelector('.search');
    // definisemo to polje dodajuci mu vrednost
    searchField.value && getCat(searchField.value);
    // da bi ispraznili polje prilikom nove pretrage
    searchField.value = "";
}


// funkcija koja salje REQUEST
function getCat(searchValue) {
      var request = new XMLHttpRequest();

      // var url = 'https://api.thecatapi.com/v1/images/search?limit=5&order=DESC'
      var url = 'https://api.thecatapi.com/v1/breeds';

      request.open("GET", url);
      request.setRequestHeader("key", "2caee240-7fbc-45c7-b8da-a9c119a68522");

      request.onload = function() {
          listImage(JSON.parse(request.responseText));
      }
      request.send();
}


function listImage(images) {
    imageList.innerHTML = '';
    images.forEach(function(image, i) {
        addImage(image, i)
    })
}

function addImage(url, i) {
    // var img = document.createElement('img');
    // img.src = url.url;
    //
    // imageList.appendChild(img);
    console.log(url)
    var div = document.createElement('div');
    var title = '<h3>' + url.name + '</h3>';
    var desc = '<p>' + url.description + '</p>';
    var a = '<a href="' + url.wikipedia_url + '">Wikipedia</a>'

    div.innerHTML = title + desc + a;


    imageList.appendChild(div);


    // var imageElement = document.createElement('div');
    // imageElement.classList.add('cat');
    //
    // var img = '<img src="' + url.url + '" />';
    //
    // imageElement.innerHTML = img;
    //
    // imageList.appendChild(imageElement)
}





// function getCatInfo() {
//   var request = new XMLHttpRequest();
//
//   var url = 'https://api.thecatapi.com/v1/breeds?attach_breed=0';
//
//
//   request.open("GET", url);
//   request.setRequestHeader("key", "2caee240-7fbc-45c7-b8da-a9c119a68522");
//
//   request.onload = function() {
//       listInfo(JSON.parse(request.responseText));
//   }
//   request.send();
// }
//
//
// function listInfo(catData) {
//   // imageList.innerHTML = '';
//   catData.forEach(function(data) {
//       addData(data);
//       console.log(data)
//   })
// }
//
// function addData(data) {
//
// }
//
// getCatInfo();



// init
searchButton.addEventListener('click', onSearch);
