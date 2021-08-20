const newsletter = document.querySelector('.newsletter-modal');
const newsForm = document.getElementById('news-form');

window.addEventListener('load', () => {
  setTimeout(() => {
    newsletter.style.display='block';
  }, 1000);
})

newsletter.addEventListener('click', (e) => {
  if(e.target == newsletter){
    newsletter.style.display = 'none';
  }
});

newsForm.addEventListener('submit', (e) => {
  e.preventDefault();

  newsletter.style.display = 'none';
});

let email = document.getElementById('email');
let spanzito = document.getElementsByTagName('spanzito');

email.onkeydown = function(){
  const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
  const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;

  if (regex.test(email.value) || regexo.test(email.value))
    {
      spanzito[0].innerText = "Email válido!";
      spanzito[0].style.color = 'lime';  
    }
    else
    {
      spanzito[0].innerText = "Email inválido!";
      spanzito[0].style.color = 'red';
    }
  }