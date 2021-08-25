
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav-links'); 

   burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
   })
   body.addEventListener('click', ()=>{
       nav.classList.toggle('nav-active')
   })
   }

navSlide(); 