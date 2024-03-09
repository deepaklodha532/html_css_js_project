// countEL
let countEL =  document.getElementById("count");
//saveEL
let  saveEL= document.getElementById("save");

//Increment
let incrementBtn = document.querySelector(".increment-btn");

//saveBTN
let saveBtn =  document.querySelector(".save-btn");

let count = 0;
incrementBtn.addEventListener('click',()=>{
    count ++ ;
    countEL.textContent  =count;
});


saveBtn.addEventListener('click',()=>{
    let countStr= count + " , ";
    saveEL.textContent +=countStr;
    countEL.textContent=0;
    count = 0 ; 
});