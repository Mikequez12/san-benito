function topbar_login() {
	let n = '';
	let vars = window.location.href.split('?')[1];
	if (vars === undefined) {
		n = '';
	} // Las vars se resetean así que no son necesarias
	let redirect = encodeURIComponent(window.location.href.split('?')[0]);
	if (getURLVariables() !== null) {
		if (getURLVariables().redirect !== undefined) {
			redirect = getURLVariables().redirect;
		}
	}
	window.location.href=`${window.project_dir}/login?redirect=${redirect}`;
}

function topbar_main_page() {
	let n = '';
	let vars = window.location.href.split('?')[1];
	if (vars === undefined) {
		n = '';
	} else {
		n = `?${vars}`;
	};
	window.location.href=`${window.project_dir}${n}`;
}



function topbar_ordutegia() {
	let n = '';
	let vars = window.location.href.split('?')[1];
	if (vars === undefined) {
		n = '';
	} else {
		n = `?${vars}`;
	};
	window.location.href=`${window.project_dir}/ordutegia${n}`;
}

function topbar_ekitaldiak() {
	let n = '';
	let vars = window.location.href.split('?')[1];
	if (vars === undefined) {
		n = '';
	} else {
		n = `?${vars}`;
	};
	window.location.href=`${window.project_dir}/ekitaldiak${n}`;
}

function topbar_materiala() {}

function topbar_agenda() {
	let n = '';
	let vars = window.location.href.split('?')[1];
	if (vars === undefined) {
		n = '';
	} else {
		n = `?${vars}`;
	};
	window.location.href=`${window.project_dir}/agenda${n}`;
}

function topbar_baliabideak() {
	let n = '';
	let vars = window.location.href.split('?')[1];
	if (vars === undefined) {
		n = '';
	} else {
		n = `?${vars}`;
	};
	window.location.href=`${window.project_dir}/baliabideak${n}`;
}



document.addEventListener('DOMContentLoaded',(DOMEvent) => {
	let topbar = document.createElement('topbar');
	document.body.appendChild(topbar);
	let hue = 0;
	topbar.innerHTML = `
	<topbarbutton onclick='topbar_main_page();'>Orri nagusia</topbarbutton>
	<topbarbutton onclick='topbar_ordutegia();'>Ordutegia</topbarbutton>
	<topbarbutton onclick='topbar_ekitaldiak();'>Ekitaldiak</topbarbutton>
	<topbarbutton>Materiala</topbarbutton>
	<topbarbutton onclick='topbar_agenda();'>Agenda</topbarbutton>
	<topbarbutton onclick='topbar_baliabideak()'>Baliabideak</topbarbutton>
	<topbarbutton onclick='topbar_login()'>Kontua aldatu</topbarbutton>
	`;
	let infobutton = document.createElement('infobutton');
	if (getURLVariables() !== null) {
		var course = getURLVariables().course;
		var group = getURLVariables().group;
	}
	if (getURLVariables() === null || getURLVariables().course === undefined) {
		var course = '-';
	}
	if (getURLVariables() === null || getURLVariables().group === undefined) {
		var group = '-';
	}
	infobutton.innerHTML = `
	<flexcontent>i</flexcontent>
	<infobtndetails>
		<b>Taldea</b><br>
		${decodeURI(course)} - ${group}
	</infobtndetails>
	<infobtnbg></infobtnbg>
	`;
	document.body.appendChild(infobutton);

	let creditbutton = document.createElement('creditbutton');

	creditbutton.innerHTML = `
	<flexcontent><span style='margin-right:5px;'>📖</span></flexcontent>
	<creditbtndetails>
		<b>Egilea</b><br>
		Markel Rosco
	</creditbtndetails>
	<creditbtnbg></creditbtnbg>`;

	document.body.appendChild(creditbutton);
});
