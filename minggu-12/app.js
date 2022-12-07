let text = document.getElementById('text')
const car = {
    name: 'Toyota', 
    wheel: 'Four wheels',
    doors: 'Four doors', 
    showCar: () => {
        console.log(`Car name: ${this.name}, wheel: ${this.wheel}, doors: ${this.doors}`)
    }
}

// #FFFFFF or RGB(255, 255, 255)
let changeColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    document.body.style.backgroundColor = '#' + randomColor
}

setInterval(() => {
    changeColor()
}, 1000)
