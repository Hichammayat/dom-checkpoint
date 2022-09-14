var plus = document.querySelector(".plus-btn")
var moins = document.querySelector(".minus-btn")
var count = document.querySelector ("p")

plus.addEventListener("click",function(){

    var numb = parseInt( count.textContent)
    numb = numb +1
    count.textContent = numb
})
moins.addEventListener("click",function(){
    var numb = parseInt(count.textContent)
    
    if(numb>0){
        numb = numb-1
    }
    count.textContent = numb
})