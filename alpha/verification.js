document.addEventListener('DOMContentLoaded',(DOMEvent) => {
	window.URLVariables = getURLVariables();
	console.log(getURLVariables());
	let customcol = getURLVariables().customcol;
	if (customcol === undefined) {
		customcol = '';
	} else {
		customcol = `customcol=${customcol}&`;
	};
	if (getURLVariables().course === undefined || getURLVariables().group === undefined) {
		window.location.href = `${window.project_dir}/login?${customcol}redirect=${encodeURI(window.location.href)}`;
	}
	console.log(window.location.href)
})