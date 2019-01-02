let canvas = document.getElementById('canvas')

canvas.width = canvas.scrollWidth
console.log(document.getElementById('canvas').width)
canvas.height = canvas.scrollHeight

let ctx = canvas.getContext('2d')
ctx.fillRect(10, 10, 100, 100)