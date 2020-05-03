const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "index.html";
}

const baseUrl = "https://api.punkapi.com/v2/beers";
const paramUrl = `${baseUrl}/${id}`;

fetch(paramUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createDetails(json);
  })
  .catch(function (error) {
    document.querySelector(".navbar-brand").innerText = "An error has occured!";
  });

function createDetails(details) {
  console.dir(details);

  const detailContainer = document.querySelector(".detail-container");

  let html = "";

  for (let i = 0; i < details.length; i++) {
    document.title = details[i].name;

    html += `
          <img class="details-image" src="${details[i].image_url}" alt="Title/Name" />
                <div class="detail-details">
                    <h1>${details[i].name}</h1>
                    <p><b>Description: </b>${details[i].description}</p>
                    <p><b>Delicious food pairing: </b>${details[i].food_pairing}</p>
                    <p> <b>Contributed by:</b>${details[i].contributed_by}</p>
                </div>  
  `;
  }

  detailContainer.innerHTML = html;
}
