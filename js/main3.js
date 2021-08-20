import quartosdireit from './model/quartosdireit.js';

for (const quart of quartosdireit) {
  var puxandoGridContainer = document.querySelector('.grid-container');
  var areazits  = createAreaPQuartosDireit(quart);
   puxandoGridContainer.insertAdjacentHTML('beforeend', areazits);
}

function createAreaPQuartosDireit(quart){
  return `<div class="grid-item-right">
        <img class="img-right" src="${quart.image}" alt="${quart.descri}">
        <div class="img-right-caption">
          <p>${quart.oque}</p>
          <p class="p-price">${quart.preco}</p>
        </div>
      </div>`;
}
