const formulario = document.querySelector('#form');
const numberA = document.querySelector('#numberA');
const numberB = document.querySelector('#numberB');
const mensagem = document.querySelector('#message');

formulario.addEventListener('submit', function(e) {
e.preventDefault();

if (numberB.value > numberA.value) {
mensagem.textContent = 'Seu formulário foi validado com sucesso!';
} 

else {
mensagem.textContent = 'Formulário invalido, o número B deve ser maior que o número A.';
}
});
