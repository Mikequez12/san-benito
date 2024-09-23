var hautazkoak = {
	"DBH4":[
		[
			"Frantsesa (B)",
			"Digitalizazioa (B)",
			"Fiski (A)",
			"Bio geo (A)"
		],
		[
			"Tekno (A)",
			"Ekonomia (A)",
			"Latin",
			"Digitalizazioa (A)",
			"Frantsesa (A)"
		],
		[
			"Tekno (B)",
			"Ekonomia (B)",
			"Fiski (B)",
			"Biogeo (B)"
		],
		[
			"Filosofia (A)",
			"Filosofia (B)",
			"Filosofia (D)",
			"Kultura zientifikoa",
			"Lan jarduerak"
		]
	],
	"DBH3":[
		[
			"OFE",
			"PKA",
			"Kultura klasikoa",
			"Frantsesa"
		]
	]
}

var empty = undefined;

var horarios = {
	"DBH4":{
		"A":[
			[0,"H.F./G.H.",3,1,"Gizarte"],
			["Mate",'',2,"Mate","Euskera"],
			["Atsedena",0,"Atsedena","Atsedena",3],
			["Gaztelania","Atsedena","Ingelesa",0,"Atsedena"],
			['Ingelesa',1,'Euskera','Gizarte',2],
			["Bazkaria","Gaztelania","Bazkaria","Bazkaria","Tutoretza"],
			[1,"Euskera","Mate","Ingelesa",'IZK'],
			[2,empty,"Gizarte",'Gaztelania',empty]
		]
	},
	"DBH3":{
		"A":[
			['Ingelesa','Fiski','Mate','Plastika','Tekno (2h)'],
			['Mate',0,'Biogeo','Euskera',''],
			['Atsedena','Tekno','Atsedena','Atsedena','Gaztelania'],
			['Biogeo','Atsedena','Tutoretza','Ingelesa','Atsedena'],
			['Euskera','Ingelesa','IZK',0,'Fiski'],
			['Bazkaria','Gaztelania','Bazkaria','Bazkaria','Gizarte'],
			['G.H./H.F.','Gizarte','Euskera','Gizarte','Mate'],
			['',empty,'Fiski','Gaztelania',empty]
		]
	}
}

let urlvars = getURLVariables();

let hautazkoa = hautazkoak[urlvars.course];

var success = undefined;

try {
	var ordutegia = horarios[urlvars.course][urlvars.group];
	success = true;
} catch (TypeError) {
	document.documentElement.style.setProperty('--mint','hsl(0,91%,80%');
	document.documentElement.style.setProperty('--dark-mint','hsl(0,71%,80%');

	document.addEventListener('DOMContentLoaded',function() {
		document.querySelector('#configuration').remove();

		let horario = document.querySelector('horario');
		let error_msg = document.createElement('h2');
		error_msg.innerText = '¡Uy!'
		error_msg.style.width = 'calc(100% - 60px)';
		error_msg.style.fontSize = '35px';
		let error_details = document.createElement('h2');
		error_details.innerText = 'Ez dago informaziorik'
		error_details.style.width = 'calc(100% - 60px)';
		error_details.style.fontSize = '25px';
		let msg_button = document.createElement('a');
		msg_button.style.display = 'block';
		msg_button.style.width = 'calc(100% - 60px)';
		msg_button.style.paddingLeft = '100px';
		msg_button.style.paddingRight = '100px';
		msg_button.style.textAlign = 'center';
		msg_button.classList.add('block-a');
		msg_button.href = 'https://google.com';
		let btn = document.createElement('button');
		btn.innerText = "Mezu bat bidali";
		msg_button.appendChild(btn);
		horario.appendChild(error_msg);
		horario.appendChild(error_details);
		horario.appendChild(msg_button);
	})
	success = false;
}
if (success) {

	let days = [['Astelehena','Asteartea','Asteazkena','Osteguna','Ostirala']];

	ordutegia.push.apply(days, ordutegia);

	document.addEventListener('DOMContentLoaded', function() {
		document.querySelector('#course').innerText = urlvars.course;
		document.querySelector('#group').innerText = urlvars.group;

		var table = document.createElement('table');
		table.classList.add('horario');

		console.log(days);

		days.forEach((row,i) => {
			var row_obj = document.createElement('tr');
			row.forEach((subject) => {
				console.log(subject);
				let subject_obj = document.createElement(i<1?'th':'td');
				if (subject === 'H.F./G.H.' || subject === 'G.H./H.F.' || subject === 'Plastika (2h)' || subject === 'Tekno (2h)') {
					subject_obj.setAttribute('rowspan', 2);
				}
				if (subject === undefined) {
					subject_obj.classList.add('empty');
				} else {
					if (subject === 'Atsedena') {
						subject_obj.classList.add('atsedenaldia');
					}
					if (subject === 'Bazkaria') {
						subject_obj.classList.add('bazkaria');
					}

					if (typeof subject === 'string') {
						subject_obj.innerText = subject;
						if (subject === '') {
							subject_obj.classList.add('empty');
						}
					} else {
						subject_obj.innerText = hautazkoa[subject].join('\n');
						subject_obj.classList.add('hautazkoa')
					}
				}
				if (subject !== '') {
					row_obj.appendChild(subject_obj);
				}
			})
			table.appendChild(row_obj);
		})

		document.querySelector('horario').appendChild(table);
	});

	function estilizar_celdas_horario() {
		let atsedena_b = document.querySelector('#atsedena>input').checked;
		let bazkaria_b = document.querySelector('#bazkaria>input').checked;
		let hautazkoa_b = document.querySelector('#hautazkoa>input').checked;

		document.querySelectorAll('.horario .atsedenaldia').forEach((atsedena) => {
			atsedena.style.background = "var("+(atsedena_b?"--crema":"--mint")+")";
		})
		document.querySelectorAll('.horario .bazkaria').forEach((atsedena) => {
			atsedena.style.background = "var("+(bazkaria_b?"--red":"--mint")+")";
		})
		document.querySelectorAll('.horario .hautazkoa').forEach((atsedena) => {
			atsedena.style.background = "var("+(hautazkoa_b?"--blue":"--mint")+")";
		})
	}
}