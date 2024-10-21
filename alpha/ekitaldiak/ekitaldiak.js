document.addEventListener('DOMContentLoaded',(DOMEvent) => {
	let loading_data = setInterval(function() {
		if (window.loaded_data !== undefined) {
			setTimeout(function() {
				document.querySelector('#loading').remove();

				document.querySelector('#hezkidetza').style.display = 'inline-block';

				let taldekatze_datak = document.querySelector('#taldekatze-datak');

				for (let [n,a] of window.loaded_data.Hezkidetza.values.slice(6).entries()) {
					let row = taldekatze_datak.appendChild(document.createElement('div'));
					row.innerText = a[1];
					row.style.textAlign = 'center';
					row.style.background = n%2==0?'var(--mint)':'var(--dark-mint)';
				}



				let ekitaldiak = document.querySelector('#ekitaldiak');

				for (let [n,a] of window.loaded_data.Hezkidetza.values.slice(6).entries()) {
					let row = ekitaldiak.appendChild(document.createElement('div'));
					row.innerText = a[3]===undefined?'':a[3];
					row.style.textAlign = 'center';
					row.style.background = n%2==0?'var(--mint)':'var(--dark-mint)';
				}
			}, 100);
			console.log(window.loaded_data);
			clearInterval(loading_data);
		}
	}, 10);
});