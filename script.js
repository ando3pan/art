function scrollToSection(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});} 
document.addEventListener('DOMContentLoaded',()=>{
 const images=document.querySelectorAll('.gallery img');
 const lightbox=document.createElement('div');lightbox.id='lightbox';document.body.appendChild(lightbox);
 images.forEach(img=>{img.addEventListener('click',()=>{lightbox.classList.add('active');const lightImg=document.createElement('img');lightImg.src=img.src;while(lightbox.firstChild)lightbox.removeChild(lightbox.firstChild);lightbox.appendChild(lightImg);});});
 lightbox.addEventListener('click',()=>{lightbox.classList.remove('active');});
 const logo=document.querySelector('.logo');if(logo){setTimeout(()=>{logo.style.transition='opacity 1.5s ease-in-out';logo.style.opacity=1;},200);}
});
