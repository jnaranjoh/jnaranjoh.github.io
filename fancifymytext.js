const btn = document.querySelector('button');

btn.addEventListener('click', () =>{
    makeBig();
})
function makeBig(){
    document.getElementById("text").style.fontSize = "24px";
    alert('Hello World!');
    //alert('big');
}

function fancy(){
    alert('fancy');
}

function boring(){
    alert('borings');
}


function moo(){
    alert('moo');
}

