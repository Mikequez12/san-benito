document.addEventListener('DOMContentLoaded',function() {
	document.querySelectorAll('color').forEach((col) => {
		let circ = col.parentNode.insertBefore(document.createElement('circle'),col);
		circ.style.background = `var(${col.getAttribute('var')})`;
		circ.parentElement.title = getComputedStyle(document.documentElement).getPropertyValue(col.getAttribute('var'));
	})
})