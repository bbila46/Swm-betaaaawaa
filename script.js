const welcomeScreen = document.getElementById('welcomeScreen');
const caseScreen = document.getElementById('caseScreen');
const registerBtn = document.getElementById('registerBtn');
const userNameInput = document.getElementById('userNameInput');
const greeting = document.getElementById('greeting');
const submitDiagnosisBtn = document.getElementById('submitDiagnosisBtn');
const diagnosisInput = document.getElementById('diagnosisInput');
const responsesList = document.getElementById('responsesList');

let userName = '';
let responses = [];

// Load from localStorage if available
if(localStorage.getItem('swmUserName')){
  userName = localStorage.getItem('swmUserName');
  showCaseScreen();
}

if(localStorage.getItem('swmResponses')){
  responses = JSON.parse(localStorage.getItem('swmResponses'));
  renderResponses();
}

// Register user and continue
registerBtn.addEventListener('click', () => {
  const name = userNameInput.value.trim();
  if(name.length < 2){
    alert('Please enter a valid name.');
    return;
  }
  userName = name;
  localStorage.setItem('swmUserName', userName);
  showCaseScreen();
});

// Show case folder screen
function showCaseScreen(){
  welcomeScreen.classList.remove('active');
  caseScreen.classList.add('active');
  greeting.textContent = `Hello, ${userName}!`;
  diagnosisInput.value = '';
  diagnosisInput.focus();
}

// Submit diagnosis
submitDiagnosisBtn.addEventListener('click', () => {
  const diagnosis = diagnosisInput.value.trim();
  if(diagnosis.length < 3){
    alert('Please enter a diagnosis before submitting.');
    diagnosisInput.focus();
    return;
  }
  // Save diagnosis with user name
  responses.push({ name: userName, diagnosis });
  localStorage.setItem('swmResponses', JSON.stringify(responses));
  renderResponses();
  diagnosisInput.value = '';
  alert('Thank you for your submission!');
});

// Render list of responses
function renderResponses(){
  responsesList.innerHTML = '';
  responses.forEach(resp => {
    const li = document.createElement('li');
    li.textContent = `${resp.name} – "${resp.diagnosis}"`;
    responsesList.appendChild(li);
  });
}
