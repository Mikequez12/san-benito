function load_data() {
	let urlvars = getURLVariables();
	document.addEventListener('DOMContentLoaded',function() {
		let dataload = document.createElement('script');
		dataload.setAttribute('dataload',`Agenda - ${urlvars.course}${urlvars.group}`);
		dataload.src = '../requests/spreadsheets.js';
		document.body.appendChild(dataload);

		var interval = setInterval(function() {
			console.log(window.loaded_data);
			if (window.loaded_data !== undefined) {
				let agenda = window.loaded_data[`Agenda - ${urlvars.course}${urlvars.group}`].values;

				load_agenda(agenda);

				clearInterval(interval);
			}
		},10);
	});
}

load_data();

function load_agenda(profesores_bdd_prototype) {
	if (profesores_bdd_prototype===undefined) {
		document.documentElement.style.setProperty('--mint','hsl(0,91%,80%)');
		document.documentElement.style.setProperty('--dark-mint','hsl(0,71%,80%)');

		document.querySelector('page').remove();

		window.error_no_info();

		success = false;
		return;
	}

	var profesores_bdd = {};

	profesores_bdd_prototype.forEach(([k,a,b]) => {
		profesores_bdd[k] = [a,b];
	});

	console.log(profesores_bdd);

	let urlvars = getURLVariables();

	var success = undefined;

	if (true) {
		for (let [asignatura,profesor] of Object.entries(profesores_bdd)) {
			if (!profesor.includes(undefined)) { 
				let row = document.createElement('tr');
				let mail = `${profesor[0][0].toLowerCase()}${profesor[1].toLowerCase()}@sanbenitoikastola.net`;
				row.style.fontSize = '1rem';
				row.innerHTML = `
					<td>
						${asignatura}
					</td>
					<td>
						${profesor.join(' ')}
					</td>
					<td>
						<span customtitle="Mezu bat bidali"><a class='' href=mailto:${mail}>${mail}</a></span>
					</td>
				`;
				document.querySelector('page>table').appendChild(row);
				console.log(asignatura,profesor);
			}
		}
	}
}