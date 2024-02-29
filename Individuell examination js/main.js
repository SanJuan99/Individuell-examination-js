let bodiesData;
// använder fetch för att hämta data från en API.
fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
  method: 'GET',
  headers: {
    'x-zocom': 'solaris-2ngXkR6S02ijFrTP'
  }
})
// När datan har hämtats omvandlas den till JSON-format med response.json(). Datan sparas sedan i variabeln bodiesData och skrivs ut i konsolen.
.then(response => response.json())
.then(data => {
  bodiesData = data.bodies;
})
.catch(error => console.error('Error:', error));

// lägger till en eventlyssnare till 'search-button'.
document.getElementById('search-button').addEventListener('click', function() {
  let searchText = document.getElementById('search-field').value;
  let planet = bodiesData.find(body => body.name.toLowerCase() === searchText.toLowerCase());
  console.log(planet);
  document.getElementById('search-button').setAttribute('href', 'planetInfo.html?id=' + planet.id);
});

// När knappen klickas på hämtas värdet från input-fält med id 'search-field' och söks igenom i bodiesData för att hitta en matchning.
// Om en matchning hittas skrivs den ut i konsolen och en länk skapas med 'planetInfo.html?id=' följt av planetens id.