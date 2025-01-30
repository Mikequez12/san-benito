window.project_dir = 'https://mikequez12.github.io/san-benito/pre-alpha';
if (getURLVariables().force!='true') {
    indow.location.href = window.location.href.replace('pre-alpha',window.app_version);
}

document.addEventListener('DOMContentLoaded',(DOMEvent) => {
    document.head.appendChild(document.createElement('script')).src='../actual-version.js'
})