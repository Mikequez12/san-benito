let page = document.currentScript.getAttribute('dataload');
const url = `https://sheets.googleapis.com/v4/spreadsheets/10XrDFPdMcVkcHkHtotobIjpS2o586hGTzw1L--wPY60/values/${page}?key=AIzaSyCPoCo9JcBf6_p7JqlPDZ_6frBODdw4EAI`;

console.log(url)

fetch(url)
    .then(response => {
        return response.json();
        if (!response.ok) {
            throw new Error('ERROR IN LOAD');
        }
    })
    .then(data => {
    	if (window.loaded_data === undefined) {
    		window.loaded_data = {};
    	};
        window.loaded_data[page]= data;
    })
    .catch(error => console.error('Error:', error));