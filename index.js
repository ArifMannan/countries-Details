function getCountry() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
    
}
function displayCountry(countries) {
    const countryDetails = document.getElementById('country-details');
    for (const country of countries) {
        const div = document.createElement('div');
        div.classList.add('countries');
        div.innerHTML = `
        <h2>${country.name} </h2>
        <h4>Capital :${country.capital} </h4>
        <button class ="btn" onclick="localDetailsBtn('${country.name}')"><a class="link" href="#">Details</a></button>`
        countryDetails.appendChild(div);
    }
}
getCountry();
function localDetailsBtn(name){
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => displayCountryDetails(data))
}
function displayCountryDetails(names) {
    const divDetails = document.getElementById('all-details');
    for (const name of names) {
        divDetails.innerHTML = `
        <h1> Name :${name.name} </>
        <h2>Capital :${name.capital} </h2>
        <h3>Population :${name.population} </h3>
        <h3>Language :${name.languages[0].name} ( ${name.languages[0].nativeName}  ) </h3>
        <h3>Area :${name.area} Square kilometers </h3>
        <h3>Region :${name.region} </h3>
        <img width="200" src="${name.flag}" alt="" srcset="">
    `
    }
}