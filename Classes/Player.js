class Player {
    constructor(containerMap) {
        this.containerMap = containerMap
        this.div = this.create();
        this.lifeDiv = this.createLifeDiv();
        this.top = 0;
        this.left = 0;
        this.width = 20;
        this.height = 20;
        this.life = 100;
        this.display();
    }

    displayLife() {
        const { style } = this.lifeDiv;
        style.position = "absolute";
        style.top = "-20px";
        style.color = "black";
        this.lifeDiv.innerHTML = this.life;
    }

    create() {
        const div = document.createElement('div');
        containerMap.appendChild(div);
        return div;
    }

    createLifeDiv() {
        const lifeCounterDiv = document.createElement('span');
        this.div.appendChild(lifeCounterDiv);
        return lifeCounterDiv;
    }

    display() {
        const { style } = this.div;

        style.width = `${this.width}px`;
        style.height = `${this.height}px`;
        style.top = `${this.top}px`;
        style.left = `${this.left}px`;
        style.backgroundColor = "yellow ";
        style.position = "absolute";
        this.displayLife();
    }

    decreaseLife() {
        this.life -= 10
        setTimeout(() => {
            this.div.style.backgroundColor = "red"
            console.log(this.div)
        }, 100)
        return this.display()
    }
}