class Game {
    constructor(containerMap) {
        this.gameContainer = containerMap
        this.player = new Player(containerMap)
        this.obstacleArray = [];
        this.generateObstacles();
        this.bindKeys()
    }

    generateObstacles() {
        for (let i = 0; i < 15; i++) {
            let obstacle = new Obstacle(containerMap);
            while (this.objectIntersectsObstacles({
                    left: obstacle.left,
                    top: obstacle.top,
                    width: obstacle.width,
                    height: obstacle.height
                })) {
                console.log(`recreate obstacle`);
                obstacle = new Obstacle(containerMap);
            }
            obstacle.create();
            this.obstacleArray.push(obstacle);
        }
    }

    bindKeys() {
        document.addEventListener('keyup', (event) => {
            event.preventDefault()
            let nextTop = this.player.top;
            let nextLeft = this.player.left;

            if (event.keyCode === 40) { // key down              
                nextTop += 20;
            } else if (event.keyCode === 38) { //key up
                nextTop -= 20;
            } else if (event.keyCode === 37) { //key left
                nextLeft -= 20;
            } else if (event.keyCode === 39) { //key right
                nextLeft += 20;
            }
            this.move({ nextLeft, nextTop });
        });
    }

    move({ nextLeft, nextTop }) {
        const { width, height } = this.player;
        const intersectsObstacle = this.objectIntersectsObstacles({
            left: nextLeft,
            top: nextTop,
            width,
            height
        });
        if (intersectsObstacle) {
            this.player.decreaseLife()
            this.gameOver()
        }
        if (!this.playerIsOutsideOfContainer(nextLeft, nextTop) && !intersectsObstacle) {
            this.player.left = nextLeft;
            this.player.top = nextTop;
        }
        this.player.display();
    }

    playerIsOutsideOfContainer(nextLeft, nextTop) {
        return nextTop > 380 || nextTop < 0 || nextLeft > 380 || nextLeft < 0;
    }

    objectIntersectsObstacles({ left, top, width, height }) {

        for (let i = 0; i < this.obstacleArray.length; i++) {
            const obstacle = this.obstacleArray[i];
            const toLeft = obstacle.left + width <= left;
            const toRight = obstacle.left >= left + width;
            const toTop = obstacle.top >= top + height;
            const toBottom = obstacle.top + height < top;
            const intersects = !(toLeft || toRight || toTop || toBottom);
            if (intersects) {
                return true;
            }
        }
        return false;
    }
    gameOver() {
        if (this.player.life === 0) {
            //alert("Game Over !!!");
            this.gameOverDisplay()
            location.reload()
        }
    }

    gameOverDisplay() {
        const div = document.createElement("div")
        div.innerHTML = "Game Over !!!"
        div.style.top = "100px"
        div.style.left = "150px"
        div.style.color = "red"
        div.style.position = "absolute"
        containerMap.appendChild(div)
    }
}