document.addEventListener('DOMContentLoaded',(DOMEvent) => {
	window.URLVariables = getURLVariables();
	console.log(window.URLVariables);
	if (window.URLVariables === null || URLVariables.group === null || URLVariables.course === null) {
		window.location.href = `${window.project_dir}/login?redirect=${encodeURI(window.location.href.split('?')[0])}`;
	}
	console.log(window.location.href)
})