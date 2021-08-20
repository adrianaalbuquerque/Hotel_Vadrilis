async function loadEmtor(){
  const response = await fetch('https://my-json-server.typicode.com/lAlissial/jsonzito/posts');
  const emtornitito = await response.json();
  for (const empreend of emtornitito) {
    var puxandoCentralizFig = document.querySelector('.centralizacao_3fig');
    var areazita  = createAreaPEmTornServ(empreend);
    puxandoCentralizFig.insertAdjacentHTML('beforeend', areazita);
  }
}

function createAreaPEmTornServ(empreend){
  return `<div class="zoom">
            <div class="partezinha">
              <img src="${empreend.image}">
              <div class="text-item">
                <h2>${empreend.oque}</h2>
                <h3>${empreend.descri}</h3>
              </div>
            </div>
          </div>`;
}

loadEmtor();