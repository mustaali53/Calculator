//  let input = document.getElementById("input")
//  let button = document.getElementsByClassName("btn")
//  let screenValue = "";
//  let clear = document.getElementById("clear")
   
//  for(let i = 0; i< button.length; i++){
//      if(button[i].value != "=" && button[i].value != "C"){
//      button[i].addEventListener("click", function(){
//      let buttonText = button[i].value
//      console.log(buttonText)
//     screenValue  += buttonText
//     input.value = screenValue 
// })
     
//  }
// }

// function add(){
//    let sum = eval(screenValue)
//     console.log(eval(screenValue))
//     input.value = sum
    
// }

// clear.addEventListener("click", function(){
//     screenValue = "";
//     input.value = screenValue;
// })
// // if(button.value == "C"){
// //     input.value = ""; 
// // }
// // function add(num){
// //     console.log(add)
// //     input.value = num
// // }



const input = document.getElementById("input")
const button = document.getElementsByClassName("btn")
let screenValue = "";

for(var i = 0; i< button.length; i++){
    let buttonText = button[i].value
    if(buttonText != "=" && buttonText != "C"){
        button[i].addEventListener("click", function(){
            screenValue += buttonText
             input.value = screenValue 
        })
 
    }
}

function add(){
   let sum = eval(screenValue)
    screenValue = sum
    input.value = screenValue 
}

function clean(){
    screenValue = "";
    input.value = screenValue
}