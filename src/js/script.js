

const nav = document.getElementById('nav');
const open = document.getElementById('open');
const close = document.getElementById('close');

const imagePlant = document.querySelectorAll('#imagePlant');
const btnNav = document.querySelectorAll('#btnNav');
const imagePlantSelect = document.querySelector('#imagePlantSelected');
const containerImage = document.querySelector('#containerImage');

console.log(imagePlant);

btnNav.forEach(function(button){
    button.addEventListener('click', function(){
        btnNav.forEach(function(button){
            button.classList.remove('border-b-2');
            button.classList.remove('border-green-700');
            button.classList.add('text-black/40');
        })
        button.classList.remove('text-black/40');
        button.classList.add('border-b-2');
        button.classList.add('border-green-700');
        button.classList.add('text-black');

        
    })
})

imagePlant.forEach(function(image){
    image.addEventListener('click',function(){
        var img = document.createElement('img');
        img.src = image.src;
        img.classList.add('h-full');
        containerImage.removeChild(containerImage.children[0]);
        containerImage.appendChild(img);
        console.log(img);
    })
})



/*
//lightbox
const lightbox = document.querySelector('.lightbox');

const lightboxbody = document.querySelector('.lightbox-body');

const images = document.querySelectorAll('#gallery');

console.log(images);

images.forEach(function(image){
    image.addEventListener('click', function(){
        lightbox.classList.remove('scale-0');
        lightbox.classList.add('scale-100');
        const img = document.createElement('img');
        img.src = image.src;
        img.classList.add('w-full');
        img.classList.add('h-full');
        img.classList.add('object-cover');
        if(lightboxbody.children[0]){
            lightboxbody.removeChild(lightboxbody.children[0]);
        }
        lightboxbody.appendChild(img);
       
    })
})

lightbox.addEventListener('click', function(e) {
    console.log(e.target.getAttribute('id'));
    const idName = e.target.getAttribute('id');
    if(idName === 'lightbox'){
        lightbox.classList.remove('scale-100');
        lightbox.classList.add('scale-0');
    }
    
})


const year = document.querySelector('.year');
const getYear = new Date().getFullYear();
year.innerText = getYear;


const loader = document.querySelector('.loader');
window.addEventListener('load', function(){
    loader.classList.remove('flex');
    loader.classList.add('hidden');
    console.log(loader.classList);
})
*/