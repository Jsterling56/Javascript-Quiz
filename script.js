
document.getElementById('box1').addEventListener('click', changeColor1);
document.getElementById('box2').addEventListener('click', changeColor2);
document.getElementById('box3').addEventListener('click', changeColor3);
document.getElementById('box4').addEventListener('click', changeColor4);


var timeH = document.getElementById('#timer');
let timeSecond=90;

timeH.innerHTML = `$(timeSecond)`;

var countDown = setInterval(()=>{
    timeSecond--;
    timeH.innerHTML = $(timeSecond);
    if(timeSecond<0|| timeSecond<1){
        clearInterval(countDown);
    }

},1000)



function startGame(){

}

function question1(){

}

function question2(){

}

function question3(){

}

function question4(){

}

function question5(){

}


function changeColor1(){
    document.getElementById('box1').innerHTML = 'You clicked me!';
    document.getElementById('box1').style.backgroundColor="orange";
}

function changeColor2(){
    document.getElementById('box2').innerHTML='You clicked me!';
    document.getElementById('box2').style.backgroundColor='purple'; 
}

function changeColor3(){
    document.getElementById('box3').innerHTML='You clicked me!';
    document.getElementById('box3').style.backgroundColor='green';
}

function changeColor4(){
    document.getElementById('box4').innerHTML='You clicked me!';
    document.getElementById('box4').style.backgroundColor='red';
}




