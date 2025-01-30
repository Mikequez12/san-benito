function login() {
	let a = document.querySelector('#course').value;
	let b = document.querySelector('#group').value;
	let force = '';
	if (getURLVariables().force == 'true') force = '&force=true'
	window.location.href = (
		decodeURIComponent(
			window.location.href.split('?')[1].split('redirect=')[1]
		)+`?course=${a}&group=${b}${force}`
	);	
}