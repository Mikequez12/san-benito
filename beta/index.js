document.addEventListener('DOMContentLoaded',(DOMEvent) => {
	let egutegia = document.querySelector('#Egutegia');
	let today = new Date();
	let year = today.getFullYear() - (today.getMonth() < 5);
	let img = egutegia.appendChild(document.createElement('img'));
	img.src=`https://sanbenitoikastola.eus/sites/default/files/pdf_dokumentuak/${year+1}-01/egutegiak_ikasleak_${year}-${String(year+1).slice(2)}_1.pdf`;
	img.style.width = '100%';
})