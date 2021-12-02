
const harm = document.querySelector('img');
const click = document.querySelector('.click')
const pop = document.querySelector('.popup')
const body = document.querySelector('.neww')
harm.addEventListener('click', ()=>{
    harm.style.display='none'
    pop.style.display='block'
})
click.addEventListener('click',()=>{
    pop.style.display='none'
    harm.style.display='block'
    
})

body.addEventListener('click', ()=>{
    pop.style.display='none'
    harm.style.display='block'
})
gsap.from('.popup',{duration: 1,y: '-100%', delay: 0.6})   

gsap.from('li', {duration: 2,opacity: 0, delay: 1})

   
