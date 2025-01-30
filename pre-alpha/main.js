window.project_dir = 'https://mikequez12.github.io/san-benito/pre-alpha';

document.addEventListener('DOMContentLoaded',(DOMEvent) => {
    document.body.appendChild(document.createElement('script')).src='https://mikequez12.github.io/san-benito/actual-version.js';

    let wait = setInterval(function() {
        if (window.app_version != undefined) {
            if (getURLVariables().force!='true') {
                window.location.href = window.location.href.replace('pre-alpha',window.app_version);
            }
            clearInterval(wait)
        }
    },10);
})

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