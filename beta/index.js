document.addEventListener('DOMContentLoaded',(DOMEvent) => {
	let egutegia = document.querySelector('#Egutegia');
	let today = new Date();
	let year = today.getFullYear() - (today.getMonth() < 5);
	let img = egutegia.appendChild(document.createElement('img'));
	img.src=`https://www.sanbenitoikastola.eus/sites/default/files/pdf_dokumentuak/egutegiak_ikasleak_${year}-${String(year+1).slice(2)}_1-1.png`;
	img.style.width = '100%';
})