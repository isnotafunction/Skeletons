console.log('it works');

//******S-login***********
var regSubmit = document.getElementById('s-login__reg-submit');
var loginSubmit = document.getElementById('s-login__login-submit');
var regUsername = document.getElementById('s-login__reg-username');
var regPassword = document.getElementById('s-login__reg-password');
var regConfirmPassword = document.getElementById('s-login__confirm-password');
var usernamePasswordError = document.getElementById(
  's-login__username-password-error'
);
//***reg validation***

regSubmit.addEventListener('click', function(e) {
  if (!regUsername.value && !regPassword.value) {
    e.preventDefault();
    usernamePasswordError.innerHTML = 'Please provide a username and password';
  }
  if (!regUsername.value && regPassword.value) {
    e.preventDefault();
    usernamePasswordError.innerHTML = 'Please provide a username';
  }
  if (regUsername.value && !regPassword.value) {
    e.preventDefault();
    usernamePasswordError.innerHTML = 'Please provide a password';
  }
  if (regPassword.value !== regConfirmPassword.value) {
    usernamePasswordError.innerHTML = 'Passwords do not match';
  }
  //***registration*/
});

function xhrRequest(method, url, callback) {
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
