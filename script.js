const buttonLogin = document.getElementById('button-entrar');
const inputEmail = document.getElementById('email-input');
const senhaInput = document.getElementById('senha-input');

buttonLogin.addEventListener('click', () => {
  console.log(inputEmail.value);
  if (inputEmail.value === 'tryber@teste.com' && senhaInput.value === '123456') {
    alert('Olá, Tryber!');
  } else { alert('Email ou senha inválidos.'); }
});

const checkBox = document.getElementById('agreement');
const ButtonEnviar = document.getElementById('submit-btn');

checkBox.addEventListener('click', () => { ButtonEnviar.disabled = !checkBox.checked; 
  ButtonEnviar.style.backgroundColor = 'black'});
let count = 0;
const textArea = document.getElementById('textarea');
const contador = document.getElementById('counter');

textArea.addEventListener('keyup', () => {
  const quantidade = textArea.value.length;
  count = 500 - quantidade;
  contador.innerHTML = count;
});
// REQUISITO 22
const formMain = document.getElementById('form-main');
// const formPai = document.getElementById('form-data');

// FUNÇÃO PARA ENCONTRAR FAMILIA
const familias = document.getElementsByClassName('familia-input');
let familiaEscolhida = '';
function encontraFamilia() {
  for (let i = 0; i < familias.length; i += 1) {
    if (familias[i].checked === true) {
      familiaEscolhida = familias[i].value;
    }
  }
}

// FUNÇÃO PARA ENCONTRAR MATERIA
const materias = document.getElementsByClassName('subject');
let materiaEscolhida = '';
function encontraMateria() {
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked === true) {
      materiaEscolhida += `${materias[i].value}, `;
    }
  }
}

// FUNÇÃO PARA ENCONTRAR NOTA
const nota = document.getElementsByClassName('rateNumber');
let notaEscolhida = '';

function encontraNota() {
  for (let i = 0; i < nota.length; i += 1) {
    if (nota[i].checked === true) {
      notaEscolhida = nota[i].value;
    }
  }
}

const firstname = document.getElementById('input-name');
const lastname = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const formPreenchido = document.getElementById('form-preenchido');
const casaInput = document.getElementById('house');
// const familiaInput = document.getElementById('family');
const nota1 = document.createElement('p');
const nome = document.createElement('p');
const email = document.createElement('p');
const casa = document.createElement('p');
const familia = document.createElement('p');
const materias1 = document.createElement('p');
const formData1 = document.createElement('p');
const formData = document.createElement('form');

function appendElementos() {
  formData.appendChild(nome);
  formData.appendChild(email);
  formData.appendChild(casa);
  formData.appendChild(familia);
  formData.appendChild(materias1);
  formData.appendChild(nota1);
  formData.appendChild(formData1);
}

ButtonEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  encontraFamilia();
  encontraMateria();
  encontraNota();
  formData.id = 'form-data';
  formPreenchido.appendChild(formData);
  formMain.style.display = 'none';
  materias1.innerHTML = `Matérias: ${materiaEscolhida}`;
  familia.innerHTML = `Família: ${familiaEscolhida}`;
  casa.innerHTML = `Casa: ${casaInput.value}`;
  email.innerHTML = `Email: ${emailInput.value}`;
  nome.innerHTML = `Nome: ${firstname.value} ${lastname.value}`;
  nota1.innerHTML = `Avaliação: ${notaEscolhida}`;
  formData1.innerHTML = `Observações: ${textArea.value}`;
  appendElementos();
});
