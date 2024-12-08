function login() {
	let a = document.querySelector('#course').value;
	let b = document.querySelector('#group').value;

	let url = decodeURIComponent(
		window.location.href.split('?').slice(1).join('?').split('redirect=')[1]
	);

	let customcol = '';

	if (getURLVariables().customcol !== undefined) {
		customcol = `&customcol=${getURLVariables().customcol}`;
	};

	url += `${url.includes('?')?'&':'?'}course=${a}&group=${b}${customcol}`;

	window.location.href = url;
}