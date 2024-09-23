document.addEventListener('DOMContentLoaded', (DOMEvent) => {
	document.querySelectorAll('*[debug]').forEach((element) => {
		console.log(element);
		console.log(element.getAttribute('debug'));
		element.style.background = `${element.getAttribute('debug')}`;
		console.log(element.style.background);
	})
})