var img = document.querySelector('img');
var url = 'https://dog.ceo/api/breeds/image/random';
var button = document.querySelector('button');

//---------------XHR Request------------------
button.addEventListener('click', function() {
  fetchData('GET', url, displayImage);
});

//generic XHR request
function fetchData(method, url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      return callback(response);
    }
  };
  xhr.open(method, url);
  xhr.send();
}

function displayImage(response) {
  img.src = response.message;
}
//---------------Fetch & Promises------------------

// button.addEventListener('click', function() {
//   fetch(url)
//     .then(function(response) {
//       console.log(response.status);
//       if (response.ok) {
//         console.log(typeof response.json());
//         return response.json();
//       } else {
//         return Promise.reject(response.status);
//       }
//     })
//     .then(function(data) {
//       img.src = data.message;
//     });
// });

//---------------Promises with ES6------------------

// button.addEventListener('click', function() {
//   fetch(url)
//     .then(blob => blob.json())
//     .then(data => {
//       img.src = data.message;
//       return data;
//     })
//     .catch(err => console.log(err));
// });
