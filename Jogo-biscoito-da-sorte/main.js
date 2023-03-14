const LuckyOptions = [
  `A jornada de mil milhas começa com um único passo.`,
  `A simplicidade é a melhor chave para a verdadeira elegância.`,
  `Um amigo de verdade é um tesouro raro.`,
  `A sorte sorri para aqueles que se esforçam.`,
  `Uma vida bem vivida é uma jornada para o sucesso.`,
  `O fracasso é apenas uma oportunidade para começar de novo com mais experiência.`,
  `A sabedoria vem da reflexão.`,
  `A mudança é inevitável, mas o crescimento é opcional.`,
  `O amor é a chave para abrir a porta da felicidade.`,
  `O sucesso não é definitivo, o fracasso não é fatal, é a coragem de continuar que conta.`
]
let randomNumber = Math.abs((Math.round(Math.random() * 10))-1)
const home = document.querySelector('.home')
const lucky = document.querySelector('.lucky')
const btnLucky = document.querySelector('#closedCookie')
const btnReset = document.querySelector('#resetCookie')

function openLuckyCookie (event) {
  home.classList.toggle("hide")
  lucky.classList.toggle("hide")
  document.querySelector('.lucky p').innerText = LuckyOptions[randomNumber]
}

function newLuckyCookie (event) {
  home.classList.toggle("hide")
  lucky.classList.toggle("hide")
  randomNumber = Math.abs((Math.round(Math.random() * 10))-1)
}

btnLucky.addEventListener('click', openLuckyCookie)
btnReset.addEventListener('click', newLuckyCookie)

document.addEventListener('keypress', function(event){
  if(event.key === 'Enter') {
    if(home.classList.contains('hide') === false) {
      openLuckyCookie()
    }
    else {
      newLuckyCookie()
    }
  return
  }
})
