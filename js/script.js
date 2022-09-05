'use strict'

const section2=document.querySelector('.card__section-2');

section2.addEventListener('click',function(e){
        const click=e.target.closest('.card__Question-block');
        if(!click){
            return;
        }
        click.querySelector('.Question').classList.toggle('qstn-style');
        const a=click.dataset.a;
        document.querySelector(`.Answer-${a}`).classList.toggle('show');
})