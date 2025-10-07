
let input = document.querySelector('.input');

let btns = document.querySelectorAll(".btn");


btns.forEach((btn) => {

    btn.addEventListener('click', function(e) {
        let condition = Math.floor(Math.random() *10);
       
 if (btn.innerText == "="){
     
    if(condition > 3){

    input.value =eval(input.value)
 }
 else{

    
    input.value =eval(input.value) + 3;
 }
}

 else if(btn.innerText == "C"){


    input.value =  "";
 }
 else if(btn.innerText == "CE"){

    input.value = input.value.slice(0, -1);
 }
 else if (btn.innerText == "+/-"){

      let val = input.value;
      input.value = val * -1;



 }
 
 else if (btn.innerText == "%"){
      let val = input.value;
      input.value = (val / 100) * 100;
 }
 else{

    input.value += btn.innerHTML;

 }
 
    });
})

