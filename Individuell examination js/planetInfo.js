let urlParams = new URLSearchParams(window.location.search); // Detta skapar ett URLSearchParams-objekt med den aktuella webbadressens söksträng.
let planetId = urlParams.get('id'); // Detta hämtar värdet av 'id'-parametern från URL:en.

fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
  method: 'GET',
  headers: {
    'x-zocom': 'solaris-2ngXkR6S02ijFrTP'
  }
})
.then(response => response.json())
.then(data => {
  let bodiesData = data.bodies;
  displayPlanetInfo(bodiesData);
})
.catch(error => console.error('Error:', error));

// Hämtar planeternas id och fyller elementen med data från API
function displayPlanetInfo(bodiesData) {
  let planet = bodiesData.find(body => body.id == planetId);
  document.getElementById('planet-name').innerHTML = planet.name;
  document.getElementById('planet-latin-name').innerHTML = planet.latinName;
  document.getElementById('planet-description').innerHTML = planet.desc;
  document.getElementById('omkrets-text').innerHTML = planet.circumference;
  document.getElementById('km-från-solen-text').innerHTML = planet.distance;
  document.getElementById('max-temperatur-text').innerHTML = planet.temp.day;
  document.getElementById('min-temperatur-text').innerHTML = planet.temp.night;
  document.getElementById('månar-text').innerHTML = planet.moons;
}

