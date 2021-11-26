var bton = document.querySelector('#one i');
var button= document.querySelector('button');

var bton2 = document.querySelector('#two i');
var button2= document.querySelector('button#bn2');

var bton3 = document.querySelector('#three i');
var button3= document.querySelector('button#bn3');


bton.addEventListener('click' , function(){
    document.querySelector('#one').style.display = 'none'
})
button.addEventListener('click' , function(){
    document.querySelector('#one').style.display = 'initial'
})



bton2.addEventListener('click' , function(){
    document.querySelector('#two').style.display = 'none'
})
button2.addEventListener('click' , function(){
    document.querySelector('#two').style.display = 'initial'
})




bton3.addEventListener('click' , function(){
    document.querySelector('#three').style.display = 'none'
})
button3.addEventListener('click' , function(){
    document.querySelector('#three').style.display = 'initial'
})

