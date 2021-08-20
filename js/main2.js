import servdohotel from './model/servdohotel.js';
import servicoseprecos from './model/servicoseprecos.js';

for (const service of servdohotel) {
  var puxandoservicos = document.querySelector('.servicos_geral');
  var areazinha  = createAreaPServ(service);
  puxandoservicos.insertAdjacentHTML('beforeend', areazinha);
}

function listaServicosAreaBranca(service){
  let outputzito = '';
  for (let ser of service){
    outputzito+= `<li>
                  <span class="items-text">
                    ${ser}
                  </span>
                </li>`;
  }
  return outputzito;
}

function somarPrecosServicos (arraydoserv){
  let arrayzt = servicoseprecos;
  let variavelzt = [];
  for (let servicl of arraydoserv.lista){
    for (let nomez of arrayzt){
      if (servicl == nomez.nome){
        variavelzt.push(nomez.preco);
      }
    }
  }
  let variavel3 = variavelzt.reduce((addition, value) => addition + value);
  return variavel3;
}


function createAreaPServ(service){
  return `<div class="servico">
            <div class="parte_colorida">
              <span class="first_linha">
                ${service.tipo}
              </span>
              <span class="preco">
                R${'$'} ${somarPrecosServicos(service)}
              </span>
              <h3 class="por_dia">
                POR DIA
              </h3>
            </div>
            <div class="parte_branca">
              <ul class="lista">
                ${listaServicosAreaBranca(service.lista)}
              </ul>
              <button class="btnpl">
                <a href="https://https://ifpb.github.io/lm/">LER MAIS</a>
              </button>
            </div>
          </div>`;
}

