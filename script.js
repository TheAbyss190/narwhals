function drawHole(e) {
    let narwhal = document.getElementById('narwhal');

    let holeX = e.offsetX - 40;
    let holeY = e.offsetY - 40;
    let container = document.getElementById('container');
    let hole = document.createElement('img');
    container.appendChild(hole)
    hole.setAttribute('src', 'images/hole.png');
    hole.setAttribute('class', 'poked-hole');
    hole.style.left = String(holeX) + 'px';
    hole.style.top = String(holeY) + 'px';
    
    narwhal.style.left = String(holeX + 20) + 'px';
    narwhal.style.top = String(holeY + 20) + 'px';

}

function clearScreen() {
    let holes = Array.from(document.getElementsByClassName('poked-hole'));
    holes.forEach(element => {element.remove();});
}