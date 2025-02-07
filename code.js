document.getElementById('purple').onclick = makePurple
document.getElementById('green').onclick = makeGreen
document.getElementById('blue').onclick = makeBlue
document.getElementById('red').onclick = makeRed


function makePurple() {
    document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
    document.querySelector('body').style.color = 'white'
}

function makeGreen() {
    document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
    document.querySelector('body').style.color = 'white'
}

function makeBlue() {
    document.querySelector('body').style.backgroundColor = 'rgba(0,254,255,1)'
    document.querySelector('body').style.color = 'white'
}

function makeRed() {
    document.querySelector('body').style.backgroundColor = 'rgba(255,0,0,1)'
    document.querySelector('body').style.color = 'white'
}