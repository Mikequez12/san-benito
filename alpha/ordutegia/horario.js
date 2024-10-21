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

	document.body.appendChild(document.createElement('page')).innerHTML = `<h1>Ordutegia</h1>
	<div class='child-50' style='width:70vw;position: relative;'>
		<horario style='display:inline-block;width: 80%;'></horario>
		<div id='configuration' style='display:inline-block;width: calc(20% - 5px);top:0;position: absolute;'>
			<br>
			<h3 class='hunderline h-nopad'>Pertsonalizatu</h2>
			<div>
				<label id='hautazkoa' class='block'>
					<input onclick='estilizar_celdas_horario()' type='checkbox'/>Hautazkoak markatu
				</label>
				<label id='atsedena' class='block'>
					<input onclick='estilizar_celdas_horario()' type='checkbox'/>Atsedenak markatu
				</label>
				<label id='bazkaria' class='block'>
					<input onclick='estilizar_celdas_horario()' type='checkbox'/>Bazkariak markatu
				</label>
			</div>
			<br>
			<h3 class="hunderline h-nopad">Detaileak</h2>
			<label style="padding-left: 5px;display:block;"><b>Kurtsoa:</b><span style="right:0;position:absolute;" id='course'>-</span></label>
			<label style="padding-left: 5px;display:block;"><b>Taldea:</b><span style="right:0;position:absolute;" id='group'>-</span></label>
		</div>
	</div>`;


	document.querySelector('#course').innerText = urlvars.course;
	document.querySelector('#group').innerText = urlvars.group;

	var table = document.createElement('table');
	table.classList.add('horario');

	days.forEach((row,i) => {
		var row_obj = document.createElement('tr');
		row.forEach((subject) => {
			let subject_obj = document.createElement(i<1?'th':'td');
			if (subject === 'H.F./G.H.' || subject === 'G.H./H.F.' || subject === 'Plastika (2h)' || subject === 'Tekno (2h)') {
				subject_obj.setAttribute('rowspan', 2);
			}
			if (subject === '!empty') {
				subject_obj.classList.add('empty');
			} else {
				if (subject === 'Atsedena') {
					subject_obj.classList.add('atsedenaldia');
				}
				if (subject === 'Bazkaria') {
					subject_obj.classList.add('bazkaria');
				}

				if (subject[0] !== '~') {
					subject_obj.innerText = subject;
					if (subject === '') {
						subject_obj.classList.add('empty');
					}
				} else {
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
	document.querySelectorAll('td:not(.empty),th').forEach((horario) => {
		horario.style.setProperty('--col',`${horario.style.background}`);
	});
}