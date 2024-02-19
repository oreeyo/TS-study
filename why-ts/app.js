// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} city
 * @property {string} street
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

const fetchUser = function(){
 return axios.get(url)
}

fetchUser().then(function(response){
  response.address.city
})

console.log(fetchUser())
function startApp() {
  fetchUser(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      username.innerText = user.username
      email.innerText = user.email
      address.innerText = user.address.street + ' ' + user.address.suite + ' ' + user.address.city + ' ' + user.address.suite+ ' ' + user.address.zipcode 
      // TODO: 이름, 이메일, 주소 표시하기
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
