var removeCartItemButtons = document.getElementsByClassName("delete-btn")
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++ ) {
    var button = removeCartItemButtons[i]
    button.addEventListener("click", function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
    })
}


var likeButton = document.getElementsByClassName("like-btn")
likeButton.addEventListener("click", function(event){
    var buttonClick = event.target
    buttonClick.parentElement.style.backround="#337ab7"
} )