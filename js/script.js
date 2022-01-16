const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = ['Analista de Sistemas','Densenvolvedor Front End']


let idx = 1
let speed = 300 / 2
let i =0

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
  
    textEl.innerText = text[i].slice(0, idx)
    idx++
    

    if(idx > text[i].length){
        idx = 1
        i++
    }
    if(i == text.length){
      i=0
    }
    
    setTimeout(writeText, speed)
    
    
    
}

