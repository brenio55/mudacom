var userButton = document.getElementById("imgButton");
var loginButtons = document.getElementById("loginButtons");

var controladorMostrarButton = false

userButton.addEventListener("click", function(){
    if (!controladorMostrarButton){
        loginButtons.classList.add("mostrar");
        controladorMostrarButton = true
    }else{
        loginButtons.classList.remove("mostrar");
        controladorMostrarButton = false
    }
})