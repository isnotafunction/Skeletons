var button = document.querySelector('button');
var img = document.querySelector('img');

button.addEventListener('click', function() {
  fetchData('GET', '/data', display);
});

function fetchData(method, url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response);
    } else {
      console.log('XHR error', xhr.readyState);
    }
  });
  xhr.open(method, url, true);
  xhr.send();
}

function display(response) {
  img.src = response.message;
}
