function topbar_login() {
	let n = '';
	let vars = window.location.href.split('?')[1];
	if (vars === undefined) {
		n = '';
	} // Las vars se resetean así que no son necesarias
	if (vars.force == 'true') {
		force = 'force=true&'
	} else {
		force = ''
	}
	window.location.href=`${window.project_dir}/login?${force}redirect=${encodeURIComponent(window.location.href.split('?')[0])}`;
}

function topbar_main_page() {
	let n = '';
	let vars = window.location.href.split('?')[1];
	if (vars === undefined) {
		n = '';
	} else {
		n = `?${vars}`;
	};
	if (vars.force == 'true') {
		force = '&force=true'
	} else {
		force = ''
	}
	window.location.href=`${window.project_dir}${n}${force}`;
}



function topbar_ordutegia() {
	let n = '';
	let vars = window.location.href.split('?')[1];
	if (vars === undefined) {
		n = '';
	} else {
		n = `?${vars}`;
	};
	if (vars.force == 'true') {
		force = '&force=true'
	} else {
		force = ''
	}
	window.location.href=`${window.project_dir}/ordutegia${n}${force}`;
}

function topbar_ekitaldiak() {}

function topbar_materiala() {}

function topbar_agenda() {}

function topbar_dokumentuak() {}





document.addEventListener('DOMContentLoaded',(DOMEvent) => {
	let topbar = document.createElement('topbar');
	document.body.appendChild(topbar);
	let hue = 0;
	topbar.innerHTML = `
	<topbarbutton onclick='topbar_main_page();'>Orri nagusia</topbarbutton>
	<topbarbutton onclick='topbar_ordutegia()'>Ordutegia</topbarbutton>
	<topbarbutton>Ekitaldiak</topbarbutton>
	<topbarbutton>Materiala</topbarbutton>
	<topbarbutton>Agenda</topbarbutton>
	<topbarbutton>Dokumentuak</topbarbutton>
	<topbarbutton onclick='topbar_login()';>Kontua aldatu</topbarbutton>
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
		${course} - ${group}
	</infobtndetails>
	<infobtnbg></infobtnbg>
	`;
	document.body.appendChild(infobutton);
});