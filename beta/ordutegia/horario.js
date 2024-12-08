let urlvars = getURLVariables();

var success = undefined;

function load_data() {
	document.addEventListener('DOMContentLoaded',function() {
		let dataload = document.createElement('script');
		dataload.setAttribute('dataload',`Ordutegiak - ${urlvars.course}${urlvars.group}`);
		dataload.src = '../requests/spreadsheets.js';
		document.body.appendChild(dataload);

		var interval = setInterval(function() {
			if (window.loaded_data !== undefined) {
				let horario = loaded_data[`Ordutegiak - ${urlvars.course}${urlvars.group}`].values;

				try {
					var ordutegia = horario.map(arr => arr.map(item => item/*.split('\n')*/).flat());
				} catch (TypeError) {
					error_screen();
					clearInterval(interval);
					return false;
				}
				console.log(ordutegia);
				clearInterval(interval);
				return create_cal(ordutegia);
			}
		},10);
	});
}

load_data();

function delete_gui() {
	document.querySelector('page').remove();
}

function error_screen() {
	delete_gui();

	window.error_no_info();

	success = false;
}

function create_cal(ordutegia) {
	document.querySelector('page').remove();

	console.log(ordutegia);

	let days = [['Astelehena','Asteartea','Asteazkena','Osteguna','Ostirala']];

	ordutegia.push.apply(days, ordutegia);

	console.log('creating page...');

	let page = document.body.appendChild(document.createElement('page'));
	page.innerHTML = `<h1>Ordutegia</h1>
	<div class='child-50' style='width:100%;position: relative;'>
		<div id='configuration' style='display:block;width: 100%'>
			<br>
			<div style='display:flex'>
				<label id='hautazkoa' style='width:100%;text-align:center;'>
					<input style='accent-color:var(--blue);' onclick='estilizar_celdas_horario()' type='checkbox'/>Hautazkoak markatu
				</label>
				<label id='atsedena' style='width:100%;text-align:center;'>
					<input style='accent-color:var(--crema);' onclick='estilizar_celdas_horario()' type='checkbox'/>Atsedenak markatu
				</label>
				<label id='bazkaria' style='width:100%;text-align:center;'>
					<input style='accent-color:var(--red);' onclick='estilizar_celdas_horario()' type='checkbox'/>Bazkariak markatu
				</label>
				<label id='hh' style='width:100%;text-align:center;'>
					<input style='accent-color:var(--purple);' onclick='estilizar_celdas_horario()' type='checkbox'/>2 orduko ikasgaiak markatu
				</label>
			</div>
			<br>
		</div>
		<horario style='display:block;width: 100%;'></horario>
	</div>`;
	page.style.width = '90vw';
	page.style.maxWidth = '855px';

	var table = document.createElement('table');
	table.classList.add('horario');

	days.forEach((row,i) => {
		var row_obj = document.createElement('tr');
		row.forEach((subject) => {
			let subject_obj = document.createElement(i<1?'th':'td');
			if (subject[0] === '%') {
				subject_obj.setAttribute('rowspan', 2);
				subject_obj.innerText = subject.slice(1);
				subject_obj.classList.add('hh');
			};
			if (subject === '!empty') {
				subject_obj.classList.add('empty');
			} else {
				if (subject === 'Atsedena') {
					subject_obj.classList.add('atsedenaldia');
				}
				if (subject === 'Bazkaria') {
					subject_obj.classList.add('bazkaria');
				}

				if (subject[0] !== '~' && subject[0] !== '%') {
					subject_obj.innerText = subject;
					if (subject === '') {
						subject_obj.classList.add('empty');
					}
				} else if (subject[0] === '~') {
					subject_obj.innerText = subject.slice(1);
					subject_obj.classList.add('hautazkoa');
				}
			}
			if (i<1) {
				subject_obj.style.fontSize = '20px';
			} else {
				subject_obj.style.fontSize = '15px';
			}
			if (subject !== '') {
				row_obj.appendChild(subject_obj);
			}
		})
		table.appendChild(row_obj);
	})

	document.querySelector('horario').appendChild(table);
	estilizar_celdas_horario();
	return true;
}

function estilizar_celdas_horario() {
	let atsedena_b = document.querySelector('#atsedena>input').checked;
	let bazkaria_b = document.querySelector('#bazkaria>input').checked;
	let hautazkoa_b = document.querySelector('#hautazkoa>input').checked;
	let hh_b = document.querySelector('#hh>input').checked;

	document.querySelectorAll('.horario td').forEach((atsedena) => {
		atsedena.style.background = "var(--mint)";
	});
	document.querySelectorAll('.horario th').forEach((atsedena) => {
		atsedena.style.background = "var(--dark-mint)";
	});

	document.querySelectorAll('.horario td.atsedenaldia').forEach((atsedena) => {
		atsedena.style.background = "var("+(atsedena_b?"--crema":"--mint")+")";
	});
	document.querySelectorAll('.horario td.bazkaria').forEach((atsedena) => {
		atsedena.style.background = "var("+(bazkaria_b?"--red":"--mint")+")";
	});
	document.querySelectorAll('.horario td.hautazkoa').forEach((atsedena) => {
		atsedena.style.background = "var("+(hautazkoa_b?"--blue":"--mint")+")";
	});
	document.querySelectorAll('.horario td.hh').forEach((atsedena) => {
		atsedena.style.background = "var("+(hh_b?"--purple":"--mint")+")";
	});
	document.querySelectorAll('td:not(.empty),th').forEach((horario) => {
		horario.style.setProperty('--col',`${horario.style.background}`);
	});
}