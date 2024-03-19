const slides = document.querySelectorAll(".slide");

var counter = 0; 
slides.forEach(

(slide,index)=>{
   slide.style.left = `${index * 100}%`
   
}
)


const goPrev = ()=>{
   if(counter<0) counter=10;
   counter--;

   slideImage();
}
const goNext = ()=>{
   counter++;
   if(counter==10) counter=0;
   slideImage();
}
const slideImage = () =>{
    slides.forEach (
      (slide)=> {
      slide.style.transform = `translateX(-${counter *100}%)`
}
)
}