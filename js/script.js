'use strict'

const section2=document.querySelector('.card__section-2');

section2.addEventListener('click',function(e){
        console.log(2);
        const click=e.target.closest('.card__Question-block');
        const a=click.dataset.a;
        document.querySelector(`.Answer-${a}`).classList.toggle('show');
})