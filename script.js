document.getElementById('box1').addEventListener('click', changeColor1);
document.getElementById('box2').addEventListener('click', changeColor2);
document.getElementById('box3').addEventListener('click', changeColor3);



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




