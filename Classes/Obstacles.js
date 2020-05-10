class Obstacle {
    constructor(containerMap) {
        this.containerMap = containerMap
        this.width = 0;
        this.height = 0;
        this.top = 0;
        this.left = 0;
        this.calculateSize();
    }

    calculateSize() {
        this.width = Math.round(Math.random()) * 20 + 20;
        this.height = this.width === 20 ? 40 : 20;
        this.top = Math.floor(Math.random() * 18) * 20;
        this.left = Math.floor(Math.random() * 18) * 20;
    }

    create() {
        const obst = document.createElement('div')
        const { style } = obst
        style.width = `${this.width}px`
        style.height = `${this.height}px`
        style.top = `${this.top}px`
        style.left = `${this.left}px`
        style.backgroundColor = "grey"
        style.position = "absolute"
        containerMap.appendChild(obst)
        return obst
    }
}