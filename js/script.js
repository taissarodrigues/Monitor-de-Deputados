const deputiesList = document.getElementById('deputies-list');
const deputiesStatus = document.getElementById('deputies-status');
const deputyCardTemplate = document.getElementById('deputy-card-template');

const API_URL =
  'https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=CE&ordem=ASC&ordenarPor=nome';

async function fetchDeputies() {
  DeputiesStatus.textContent = 'Carregando deputados...';
  DeputiesList.setAttribute('aria-busy', 'true');

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const result = await response.json();

    displayDeputies(result.dados);
  } catch (error) {
    DeputiesStatus.textContent =
      `Não foi possível carregar os deputados: ${error.message}`;

    console.error(error);
  }
}

function displayDeputies(deputies) {
  DeputiesList.innerHTML = '';

  deputies.forEach((deputy) => {
    const deputyCard = DeputyCardTemplate.content.cloneNode(true);

    const photo = deputyCard.querySelector('.deputy-card__photo');
    const name = deputyCard.querySelector('.deputy-card__name');
    const party = deputyCard.querySelector('.deputy-card__party');

    photo.src = deputy.urlFoto;
    photo.alt = `Foto de ${deputy.nome}`;
    name.textContent = deputy.nome;
    party.textContent = `(${deputy.siglaPartido})`;

    DeputiesList.appendChild(deputyCard);
  });

  DeputiesStatus.textContent = '';
  DeputiesList.setAttribute('aria-busy', 'false');
}

document.addEventListener('DOMContentLoaded', fetchDeputies);