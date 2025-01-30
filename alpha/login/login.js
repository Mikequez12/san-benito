function login() {
	let a = document.querySelector('#course').value;
	let b = document.querySelector('#group').value;

	let force = getURLVariables().force=='true'?'&force=true':'';

	let url = decodeURIComponent(
		window.location.href.split('?').slice(1).join('?').split('redirect=')[1]
	)

	url += `${url.includes('?')?'&':'?'}course=${a}&group=${b}${force}`;

	window.location.href = url;
}