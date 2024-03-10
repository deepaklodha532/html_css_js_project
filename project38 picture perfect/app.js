//image

let images  =  document.querySelectorAll('img') ; 

//wrapper
let wrapper   = document.getElementById("wrapper") ;
//imageWrapper
let imageWrapper  =  document.getElementById("fullImg");
//close
let close=  document.getElementById("close");

images.forEach((img,index) =>{
    img.addEventListener('click',()=>{
        openModal(`images/img${index}.jpg`);
    });
});

close.addEventListener ("click",()=>(wrapper.style.display='none' ));

function openModal(pic) {
    wrapper.style.display= 'flex' 
    imageWrapper.scr=  pic;
}
