const buttonValid = document.getElementById('valid-acess');
const email = document.getElementsByName('email');
const password = document.getElementsByName('password');
const checkInformation = document.getElementById('agreement');
const buttonSubmit = document.getElementById('submit-btn');
console.log(checkInformation);
console.log(buttonSubmit);
buttonSubmit.disabled = true;

// console.log(email);
// console.log(password);
// node list é problema
//
function validation(event) {
  // console.log(email[0].value);
  // console.log(password.value);
  event.preventDefault();
  if (email[0].value === 'tryber@teste.com' && password[0].value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonValid.addEventListener('click', validation);

function disableButton() {
  if (checkInformation.value === '') {
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.disabled = false;
  }
}

checkInformation.addEventListener('change', disableButton);
