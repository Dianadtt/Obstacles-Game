//container for game 

const containerMap = playGround("400px", "400px")
document.body.appendChild(containerMap)

function playGround(width, height) {
    const container = document.createElement('div')
    const { style } = container;
    style.top = "0px"
    style.bottom = "400px"
    style.left = "0px"
    style.right = "400px"
    style.width = width;
    style.height = height;
    style.background = "lightgrey";
    return container
}
const myGame = new Game(containerMap)
console.log(myGame)