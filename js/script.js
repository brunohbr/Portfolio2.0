const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Analista de Sistemas'

let idx = 1
let speed = 300 / 1.5


var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-dark', 'shadow');
        } else {
          nav.classList.remove('bg-dark', 'shadow');
        }
      });


writeText()



function writeText(){
    textEl.innerText = text.slice(0, idx)
    idx++

    if(idx> text.length){
        idx = 1
    }
    setTimeout(writeText, speed)
    
}

