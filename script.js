var contain = document.querySelector("#container")

var love = document.querySelector("i")

contain.addEventListener("dblclick",function(){
    love.style.transform = 'translate(-50%,-50%) scale(1)'
    setTimeout(function(){
        love.style.transform = 'translate(-50%,-50%) scale(0)'
    },1000)
})

