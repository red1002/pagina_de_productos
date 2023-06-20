let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirm = document.getElementById('confirm');
let btn = document.getElementById('btn');

btn.addEventListener('click', (e) =>{
	e.preventDefault()

	const datos = {
		usuario: username.value,
		correo: email.value,
		contraseña: password.value,
		confirmacion: confirm.value
	}

	console.log(datos)
})