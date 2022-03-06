const btn = document.querySelector('button');

btn.addEventListener('click', () =>{
    makeBig();
})

function makeBig(){
    document.getElementById("text").style.fontSize = "24pt";
    //alert('Hello World!');
    alert('Text enlarged by 24pt!');
}

function fancy(){
    document.getElementById("text").style.transform = "rotate(7deg)";
    document.getElementById("text").style.textShadow = "5px 5px 1px #ff0000, 10px 10px 1px #0000ff";
    document.getElementById("text").style.justifyContent = "space-around";
    document.getElementById("text").style.fontWeight="bold";
    document.getElementById("text").style.color="blue";
    document.getElementById("text").style.textDecoration="underline"
    alert('Fancified text!');
}

function boring(){
    document.getElementById("text").style.transform = "none";
    document.getElementById("text").style.textShadow = "none";
    document.getElementById("text").style.justifyContent = "flex-start";
    document.getElementById("text").style.fontWeight="normal";
    document.getElementById("text").style.color="black";
    document.getElementById("text").style.textDecoration="none"

    alert('Undid fancied text!');
}


function moo(){
    alert('moo');
}

