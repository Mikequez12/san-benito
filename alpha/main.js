window.project_dir = 'https://mikequez12.github.io/san-benito/alpha';
if (getURLVariables().force!='true') {
    window.location.href = window.location.href.replace('alpha',window.app_version);
}

document.addEventListener('DOMContentLoaded',(DOMEvent) => {
    document.head.appendChild(document.createElement('script')).src='https://mikequez12.github.io/san-benito/actual-version.js';
})

notification = document.createElement('notif');
notification.innerHTML = null;`<p>Atención</p><span>Esto es una notificación de <b>ejemplo</b> y por eso está en castellano.</span><div style='text-align:center;justify-content:center;align-items:center;'><button>Más detalles</button></div>`;

document.addEventListener('DOMContentLoaded',(DOMEvent) => {
	if (notification.innerHTML) {
		document.body.appendChild(notification);
	};

	let icon = document.head.appendChild(document.createElement('link'));
	icon.rel = "icon";
	icon.type = "image/x-icon";
	icon.href=`${window.project_dir}/icon.ico`;
});



function getURLVariables() {
	try {
  		return Object.fromEntries(
    		window.location.href
      		.split('?')[1]
      		.split('&')
      		.map(v => v.split('='))
  		);
	} catch (TypeError) {
		return null;
	}
}

if (getURLVariables() !== null) {
	if (getURLVariables().customcol !== undefined) {
		document.documentElement.style.setProperty('--mint',`hsl(${getURLVariables().customcol},91%,80%)`);
		document.documentElement.style.setProperty('--dark-mint',`hsl(${getURLVariables().customcol},71%,80%)`);
		document.documentElement.style.setProperty('--hue',`${getURLVariables().customcol}deg`);
	}
}



window.error_no_info = function() {
	document.documentElement.style.setProperty('--mint','hsl(0,91%,80%)');
	document.documentElement.style.setProperty('--dark-mint','hsl(0,71%,80%)');

	let page = document.body.appendChild(document.createElement('page'));
	page.innerHTML = `<div class='child-50' style='width:70vw;position: relative;'>
		<div style='display:inline-block;width: 100%;'></div>
	</div>`;
	let container = page.children[0].children[0];

	let error_msg = document.createElement('h1');
	error_msg.classList.add('h-nopad');
	error_msg.innerText = '¡Uy!'
	error_msg.style.width = '200px';
	error_msg.style.marginLeft = 'calc(50% - 100px)';
	error_msg.style.fontSize = '55px';
	error_msg.style.display = 'inline-block';
	let error_details = document.createElement('h2');
	error_details.classList.add('h-nopad');
	error_details.innerText = 'Ez dago informaziorik'
	error_details.style.width = 'calc(100% - 60px)';
	error_details.style.fontSize = '25px';
	let msg_button = document.createElement('a');
	msg_button.style.display = 'inline-block';
	msg_button.style.textAlign = 'center';
	msg_button.style.margin = 'auto';
	msg_button.classList.add('block-a');
	msg_button.href = 'mailto:10mrosco@sanbenitoikastola.net';
	let btn = document.createElement('button');
	btn.innerText = "Mezu bat bidali";
	btn.style.margin = '0';
	
	let img = container.appendChild(document.createElement('flex')).appendChild(document.createElement('img'));
	img.src=`${window.project_dir}/icon.ico`;
	img.style.filter = 'hue-rotate(-134deg';
	img.style.margin = 'auto';
	img.style.display = 'block';
	img.parentElement.style.position = 'absolute';
	img.parentElement.style.top = '-30px';
	error_msg.style.marginTop = '170px';

	container.appendChild(error_msg);
	container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
	container.appendChild(error_details);
	let flexarea = container.appendChild(document.createElement('flexcontent'));
	flexarea.style.width = '100%';
	flexarea.style.display = 'flex';
	flexarea.appendChild(msg_button);
	msg_button.appendChild(btn);
}
