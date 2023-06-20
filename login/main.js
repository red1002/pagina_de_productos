let user = document.getElementById('user');
let password = document.getElementById('password');
let btn = document.getElementById('btn');

btn.addEventListener('click', (e) =>{
	e.preventDefault()

	const datos = {
		username: user.value,
		password: password.value
	}

	console.log(datos);
})