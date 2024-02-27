display = document.getElementById("display");

function clearValue(){
    display.value = "";
}
function appendToDisplay(input){
    display.value += input;
}
function result(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value= "Error";
    }
}
