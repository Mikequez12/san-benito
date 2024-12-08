document.addEventListener('DOMContentLoaded',function() {
	let load_script = document.createElement('script');
	load_script.setAttribute('dataload',`Materiala - ${getURLVariables().course}`);
	load_script.src = '../requests/spreadsheets.js';
	document.head.appendChild(load_script);
	let interval = setInterval(function() {
		if (window.loaded_data !== undefined) {
			loaded();
			clearInterval(interval);
		}
	})
})

function create_service(logo,title,sub,url) {
	return `
	<a class='block-a' target='_blank' href='${url}'>
		<button class='service'>
			<img src='${logo}'>
			<div>
				<h2 class='h-nopad'>${title}</h2>
				<h4 class='h-nopad'>${sub}</h4>
			</div>
		</button>
	</a>
	`
}

function try_eval(t) {
	try {
		return eval(t);
	} catch {
		return 'EVAL.ERROR';
	}
}

function loaded() {
	document.querySelector('.loading').remove();
	let data = window.loaded_data[`Materiala - ${getURLVariables().course}`].values;
	if (data === undefined) {
		document.querySelector('page').remove();
		window.error_no_info();
		return;
	};

	console.log(data);

	let asignaturas = document.querySelector('page').appendChild(document.createElement('div'));
	asignaturas.classList.add('asignaturas');

	let asignaturas_array = [];

	data[0].forEach((asignatura) => {
		let asig = asignaturas.appendChild(document.createElement('div'));
		asig.setAttribute('asignatura',asignatura);
		asignaturas_array.push(asig.appendChild(document.createElement('div')));
	});
	data.slice(1).forEach(row => {
		row.forEach((info,n) => {
			let asignatura = asignaturas_array[n];
			if (info !== '') {

				let result = '';
				let mode = 'HTML';
				let continue_ = true;

				if (info.slice(0,6) === '!LINK[' && info.slice(-1) === ']') {
					let data = try_eval(`[${info.slice(6,-1)}]`);
					if (data === 'EVAL.ERROR') { return };
					result = `<a class='block-a customlink' target='_blank' href=${data[1]}><button>${data[0]}</button></a>`;
				} else if (info.slice(0,7) === '!TITLE[' && info.slice(-1) === ']') {
					let data = try_eval(`${info.slice(7,-1)}`);
					if (data === 'EVAL.ERROR') { return };
					result = `<h2 class='h-nopad'>${data}</h2>`;
				} else if (info.slice(0,5) === '!SUB[' && info.slice(-1) === ']') {
					let data = try_eval(`${info.slice(5,-1)}`);
					if (data === 'EVAL.ERROR') { return };
					result = `<h3 class='h-nopad custom'>${data}</h3>`;
				} else if (info.slice(0,6) === '!TEXT[' && info.slice(-1) === ']') {
					let data = try_eval(`${info.slice(6,-1)}`);
					if (data === 'EVAL.ERROR') { return };
					result = `<span>${data}</span>`;
				} else if (info.slice(0,8) === '!SAIOKA[' && info.slice(-1) === ']') {
					let args = try_eval(`[${info.slice(8,-1)}]`);
					if (args === 'EVAL.ERROR') { return };
					let data = JSON.parse(`{${args[1].split('&').map((s) => {
						let dat = s.split('=');
						return `"${dat[0]}":${dat[1]}`;
					})}}`);
					result = create_service(`${window.project_dir}/assets/saioka-logo.svg`,'Saioka',`${args[0]}`,`https://sanbenitoikastola.saioka.eus/course/view.php?id=${data.id}&section=${data.section}&unidad=${data.unidad}`); ///////////////////
				} else if (info.slice(0,11) === '!CLASSROOM[' && info.slice(-1) === ']') {
					data = try_eval(`[${info.slice(11,-1)}]`);
					if (data === 'EVAL.ERROR') { return };
					result = create_service(`${window.project_dir}/assets/google-classroom-logo.svg`,'Classroom',`${data[0]}`,`https://classroom.google.com/c/${data[1]}`); ///////////////////
				} else if (info.slice(0,10) === '!EXERCISE[' && info.slice(-1) === ']') {
					data = try_eval(`[${info.slice(10,-1)}]`);
					if (data === 'EVAL.ERROR') { return };
					result = create_service(data[1],data[0],data[2],data[3]);
				} else if (info.slice(0,6) === '!EVAL[' && info.slice(-1) === ']') {
					try {
						var dat = eval(`${info.slice(6,-1)}`);
					} catch {
						let widget = asignatura.appendChild(document.createElement('p'));
						widget.style.outline = 'solid 2px red';
						widget.style.color = "red";
						widget.classList.add('warning-after');
						widget.title = info.slice(6,-1);
						widget.style.outlineOffset = '-3px';
						widget.style.padding = '5px';
						widget.style.textAlign = 'center';
						widget.style.borderRadius = '6px';
						widget.innerText = 'HTML ERROR';
						continue_ = false;
					}
					result = `${dat}`;
				} else {
					result = info;
					mode = 'TEXT';
				};
				if (continue_) {
					let widget = asignatura.appendChild(document.createElement('p'));
					widget.style.textAlign = 'center';
					if (mode === 'HTML') {
						widget.innerHTML = result;
					} else if (mode === 'TEXT') {
						widget.innerText = result;
					}
				}
			}
		})
	})

	document.querySelectorAll('*[asignatura]>div').forEach((l) => {
		let asignatura = l.parentElement.getAttribute('asignatura');

		let title = document.createElement('h3');
		title.classList.add('h-nopad');
		title.innerText = asignatura;
		l.appendChild(title);
		title.addEventListener('click',(event) => {
			title.parentElement.classList.toggle('show');
		})
		if (l.children.length < 2) {
			let hutsik = l.appendChild(document.createElement('span'));
			hutsik.innerText = 'Hutsik';
			hutsik.style.color = '#aaa';
			hutsik.style.textAlign = 'center';
			hutsik.style.display = 'block';
			hutsik.style.marginTop = '10px';
			hutsik.style.fontSize = '25px';
		}
	})
}