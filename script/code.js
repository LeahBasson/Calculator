let dataEntry = document.querySelector('[data-entry]');

function display(num){
    document.getElementById('textInput').value = document.getElementById('textInput').value + num;
}

function result(){
    let result = document.getElementById('textInput').value;
    if(result) {
        document.getElementById('textInput').value = eval(result).toFixed(2);
    }
}







