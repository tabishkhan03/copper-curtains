var splide=new Splide( '.splide',{
    type:'loop',
    perPage:4,
    arrows:false,
    gap:"20px",
    pagination:false,
    breakpoints:{
        992:{
            perPage:3,
        },
        756:{
            perPage:2,
        },
        576:{
            perPage:1,
        },
    },

} ).mount();

var menubtn=document.querySelector('#menu-btn')
menubtn.addEventListener('click',()=>{
    document.getElementById('hidden-menu').classList.add('menu-open')
})
var closebtn=document.querySelector('#close-btn')
closebtn.addEventListener('click',()=>{
    document.getElementById('hidden-menu').classList.remove('menu-open')
})