window.onload = function () {
    const enterButton = document.getElementById("enterButton"); 
    const againButton = document.getElementById("againButton"); 
    const output = document.getElementById("OutputText"); 
    const input = document.getElementById("userinput");

    let randomNum = Math.floor(Math.random () * 10)  

    enterButton.addEventListener('click', CheckNumber) 

    againButton.addEventListener('click', function() {
        location.reload();
    })

    function CheckNumber () { 
        let UserAns = +input.value; 
        if(UserAns == randomNum) {
            output.innerHTML ="You Guessed Corrrectly"; 
        }  
        
        else if(UserAns!= randomNum) {
        output.innerHTML = "Tht's Incorrect mate";
        } 

        else if(UserAns>randomNum && UserAns<10) {
            output.innerHTML = "That's too high mate";
        }
       
        else if(UserAns<1) {
            output.innerHTML = "It has to be higher than one";
        } 
        
        else if(isNaN(UserAns)) {
            output.innerHTML = "That's not a number mate";
        }

    } 


}