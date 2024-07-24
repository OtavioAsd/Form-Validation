const form = document.getElementById('form');
const inputField = document.querySelectorAll('.input-field');
const spans = document.getElementsByClassName('span-required');
const submit = document.getElementById('submit');
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const users = [];
const user = {};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameValidate();
  emailValidate();
  passwordValidate();
});

function setError(index) {
  inputField[index].style.border = '2px solid #e63636';
  spans[index].style.display = 'block';
}

function removeError(index) {
  inputField[index].style.border = '2px solid #00ff37a1';
  spans[index].style.display = 'none';
}

function nameValidate() {
  if (inputField[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}

function emailValidate() {
  if (!regex.test(inputField[1].value)) {
    setError(1);
  } else {
    removeError(1);
  }
}

function passwordValidate() {
  if (inputField[2].value.length < 6) {
    setError(2);
  } else {
    removeError(2);
    passwordConfirm();
  }
}

function passwordConfirm() {
  if (inputField[2].value === inputField[3].value && inputField[3].value.length >= 6) {
    removeError(3);
  } else {
    setError(3);
  }
}

function validadeForm() {
  const isNameValid = inputField[0].value.length >= 3;
  const isEmailValid = regex.test(inputField[1].value);
  const isPasswordMatch =
    inputField[2].value === inputField[3].value &&
    inputField[3].value.length >= 6;

  if (isNameValid && isEmailValid && isPasswordMatch) {
    submit.style.backgroundColor = "#00ff37a1";
    submit.innerText = "Enviado!";

    user.Name = inputField[0].value;
    user.Email = inputField[1].value;
    user.Senha = inputField[2].value;

    alert("Usuário cadastrado!");

    users.push(user);
    console.log(user);
    form.reset();
  } else {
    alert("Usuário não cadastrado!");
    form.reset();
  }
}
