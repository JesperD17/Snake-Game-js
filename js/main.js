var user = document.querySelector('.fieldInnerWrapper .userSnake');
var startOverlay = document.querySelector('.fieldInnerWrapper .startOverlay');
var lostOverlay = document.querySelector('.fieldInnerWrapper .lostOverlay');
var field = document.querySelector('.fieldInnerWrapper');

var snakeYPos;
var snakeXPos;
var snakeStep = Math.round(field.clientWidth / 15);
console.log(snakeStep);


document.addEventListener("DOMContentLoaded", function () {
    activateGame();
})

function activateGame() {
    document.addEventListener("keydown", keydowns);
}

function resetGame() {
    if (!startOverlay) return;
    startOverlay.style.display = null;
}

function loseGame() {
    if (!lostOverlay) return;
    lostOverlay.style.display = 'flex';
}

function keydowns(e) {
    if (e.key === 'w') {
        moveUserUp(user.offsetTop);
    } else if (e.key === 'a') {
        moveUserDown(user.offsetTop);
    } else if (e.key === 's') {
        moveUserLeft(user.offsetLeft);
    } else if (e.key === 'd') {
        moveUserRight(user.offsetLeft);
    } else {
        return;
    }
}

function removeOverlays() {
    if (startOverlay) {
        startOverlay.style.display = 'none';
    }

    if (lostOverlay) {
        lostOverlay.style.display = null;
    }
}

function moveUserUp(userYPos) {
    removeOverlays();
    user.style.top = ((userYPos - snakeStep) + "px")
}

function moveUserDown(userYPos) {
    removeOverlays();
    user.style.bottom = ((userYPos + snakeStep) + "px")
}

function moveUserLeft(userXPos) {
    removeOverlays();
    user.style.left = ((userXPos + snakeStep) + "px")
}

function moveUserRight(userXPos) {
    removeOverlays();
    user.style.right = ((userXPos - snakeStep) + "px")
}

function clearPreviousInterval() {

}