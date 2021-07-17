const pesoInput = document.querySelector('#peso');
const alturaInput = document.querySelector('#altura');
const btnForm = document.querySelector('button[type="submit"]');

const paginador = document.querySelector('#paginacion');
const registroPorPagina = 5;
let totalPaginas;
let iterador;
let paginaActual = 1;

iniciarApp();

function iniciarApp()
{
	document.addEventListener('DOMContentLoaded', () => {
		btnForm.disabled = true;
	})

	pesoInput.addEventListener('blur', validarCampo);
	alturaInput.addEventListener('blur', validarCampo);
}

function validarCampo(evt)
{
	if (evt.target.value === '' || evt.target.value <= 0 || isNaN(evt.target.value)) {
		evt.target.style.borderBottom = '1px solid red';
	} else {
		evt.target.style.borderBottom = 'none';
	}
	validarCampos();
}

function validarCampos()
{
	if (pesoInput.value !== '' && alturaInput.value !== '' && pesoInput.value > 0 && alturaInput.value > 0) {
		btnForm.disabled = false;
	} else {
		btnForm.disabled = true;
	}
}

function *crearPaginador(total)
{
	for (let i = 1; i <= total; i++) {
		yield i;
	}
}

const calcularPaginas = total => Math.ceil(total/registroPorPagina);

function mostraPaginador()
{	
	totalPaginas = calcularPaginas(registroPorPagina);
	iterador = crearPaginador(totalPaginas);
	while (true) {
		const {value, done} = iterador.next();
		if (done) return;
		const boton = document.createElement('a');
        boton.href = "#";
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente');
        boton.onclick = () => {
            paginaActual = value;
        }
        paginador.appendChild(boton);
	}
}

mostraPaginador();