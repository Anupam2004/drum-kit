 

var random=document.querySelectorAll("button").length;
console.log(random);
for(i=0;i<random;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
         var innerHtmlofbtn= this.innerHTML;
         makesound(innerHtmlofbtn); 
         buttonAnimation(innerHtmlofbtn);  
        
        
    });

}

    document.addEventListener("keypress",function(event){
        makesound(event.key);
        buttonAnimation(event.key);
    });

    function makesound(key){


        switch(key){
            case "S":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;
            case "U":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;
            case "N":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;
            case "I":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;
            case "T":
                var tom5=new Audio("sounds/crash.mp3");
                tom5.play();
            break; 
            case "A":
                var tom6=new Audio("sounds/kick-bass.mp3");
                tom6.play();
            break;
            case "L":
                var tom7=new Audio("sounds/snare.mp3");
                tom7.play();
            break;
            default:




         }
        


        
    }

    function buttonAnimation(abc){
        
        var x=document.querySelector("." + abc);
        x.classList.add("pressed");
        setTimeout(function(){
            x.classList.remove("pressed");
        },100);
    }







