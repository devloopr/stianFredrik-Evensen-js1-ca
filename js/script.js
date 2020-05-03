const beerUrl = "https://api.punkapi.com/v2/beers";

async function fetchBeerData() {
  try {
    const fetchBeers = await fetch(beerUrl);
    const response = await fetchBeers.json();

    displayBeerData(response);
  } catch (error) {
    document.querySelector(".navbar-brand").innerText = "An error has occured!";
  }
}

fetchBeerData();

function displayBeerData(response) {
  console.log(response);
  const profileContainer = document.querySelector(".card-container");

  let html = "";

  for (let i = 0; i < response.length; i++) {
    html += `
                  <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                    <img class="image" src="${response[i].image_url}" alt="Title/Name" />
                      <div class="details">
                        <h4 class="name">${response[i].name}</h4>
                          <p><b></b>${response[i].tagline}</p>
                          <p><b>Brewers Tips: </b>${response[i].brewers_tips}</p>
                          <a class="btn btn-primary" href="details.html?id=${response[i].id}">Details</a>
                      </div>
                    </div>
                    </div>
                  </div>
        `;
  }

  profileContainer.innerHTML = html;

  document.title = "Brewdogs Homebrew";
}
