let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');
const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}
const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}
if(darkMode === 'enabled'){
   enableDarkMode();
}
toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}
let profile = document.querySelector('.header .flex .profile');
document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}
let search = document.querySelector('.header .flex .search-form');
document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}



// Function to handle user registration
// Function to handle user registration
function registerUser(name, role) {
  const user = {
    name: name,
    role: role,
  };
  // Store the registered user information in local storage
  localStorage.setItem('user', JSON.stringify(user));

  // Update the header with the registered user's information
  updateHeader();
}
// Function to get the logged-in user's information from local storage
function getLoggedInUser() {
  const userString = localStorage.getItem('user');
  return userString ? JSON.parse(userString) : null;
}
// Function to update the header with user information
function updateHeader() {
  const loggedInUser = getLoggedInUser();
  if (loggedInUser) {
    document.querySelector('.header .name').textContent = loggedInUser.name;
    document.querySelector('.header .role').textContent = loggedInUser.role;
    document.querySelector('.header .btn').href = '#'; // Change this to the link of the user profile page
    document.querySelector('.header .option-btn').textContent = 'logout';
  } else {
    document.querySelector('.header .name').textContent = '';
    document.querySelector('.header .role').textContent = 'student';
    document.querySelector('.header .btn').href = 'login.html';
    document.querySelector('.header .option-btn').textContent = 'login';
  }
}
// Check if the user is already logged in and update the header
updateHeader();
// Add event listener for the login form
const loginForm = document.querySelector('.form-container form');
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.pass.value;
  // Call the loginUser function with the provided email and password
  loginUser(email, password);
});
// Add event listener for the "logout" button in the header
const logoutButton = document.querySelector('.header .option-btn');
logoutButton.addEventListener('click', function () {
  // Call the logoutUser function
  logoutUser();
});
// Event listener for the "Register New" button
const registerButton = document.querySelector('.register-button');
registerButton.addEventListener('click', function () {
  // Show the registration form or redirect to the registration page
  const registrationForm = document.querySelector('.registration-form');
  registrationForm.style.display = 'block';
});
// Event listener for the "Submit" button in the registration form
const registrationForm = document.querySelector('.registration-form form');
registrationForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = registrationForm.elements.name.value;
  const role = registrationForm.elements.role.value;
  // Call the registerUser function with the provided name and role
  registerUser(name, role);

  // Hide the registration form after registration
  registrationForm.parentNode.style.display = 'none';
});
// Function to update the header with user information
function updateHeader() {
  const loggedInUser = getLoggedInUser();
  const profileButton = document.querySelector('.header .option-btn');
  if (loggedInUser) {
    document.querySelector('.header .name').textContent = loggedInUser.name;
    document.querySelector('.header .role').textContent = loggedInUser.role;
    document.querySelector('.header .btn').href = 'profile.html'; // Change this to the link of the user profile page
    profileButton.textContent = 'Update Profile';
    profileButton.href = 'profile.html'; // Change this to the link of the user profile page
  } else {
    document.querySelector('.header .name').textContent = '';
    document.querySelector('.header .role').textContent = 'student';
    document.querySelector('.header .btn').href = 'login.html';
    profileButton.textContent = 'Login';
    profileButton.href = 'login.html';
  }
}
// Event listener for the "Update Profile" button in the header
const updateProfileButton = document.querySelector('.header .option-btn');
updateProfileButton.addEventListener('click', function () {
  // Redirect to the profile update page when the button is clicked
  window.location.href = 'profile.html';
});
