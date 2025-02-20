const display = document.querySelector("#display");

function addToDisplay(input){
    display.value += input;
}

function reset(){
    display.value = '';
}
function dlt(){
    display.value = display.value.slice(0, -1);
}
function equal(){
    try{
        display.value = eval(display.value);
    }catch(err){
        alert(err);
    }
    
}