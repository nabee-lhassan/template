
// ******** main element of the whole body start ****************




// ******** main element of the whole body end ****************



// animation on scroll js start
window.addEventListener('scroll', function() {				
				
    let content = document.querySelectorAll(".sec")				
    content.forEach(function(e){				
    let contentposition = e.getBoundingClientRect().top;				
    let screenposition = window.innerHeight /1.7;				
    if (contentposition < screenposition){				
    
        if(e.classList.contains("bg-anim")){
            e.style.display = "block";
        }


    }				
    })				
            
    })		


// animation on scroll js end

// all html element here start

let sec_1 = document.querySelector('.sec_1')
let colum_1 = document.querySelector('.sec_1 .colum-1')





let cursor = document.querySelector('.cursor-effect')


window.addEventListener("mousemove", function(e) {

    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
    document.querySelector(".cursor-effect").style.display = "block";
    
    

})

document.addEventListener("mouseleave", function(e) {

    document.querySelector(".cursor-effect").style.display = "none ";
    

})



// section one event start


sec_1.addEventListener("mousemove", function(e) {

   


document.querySelector(".heading-name").style.position = "relative";

document.querySelector(".heading-name").style.left = 1-(e.x * 0.02) + "px";
document.querySelector(".heading-name").style.top = 1-(e.y * 0.02) + "px";


// heading two
document.querySelector(".heading-last-name").style.position = "relative";
document.querySelector(".heading-last-name").style.left = (e.x * 0.02) + "px";
document.querySelector(".heading-last-name").style.top = (e.y * 0.02) + "px";


// document.querySelector(".inner-cursor").style.transform = "scale(1.5)";
// document.querySelector(".inner-cursor").style.opacity = "1";
document.querySelector(".cursor-effect").style.zIndex = "0";




})


sec_1.addEventListener("mouseleave", function(e) {
  


})


// section one event end




// section one colum one event start

colum_1.addEventListener("mouseover", function(e) {

    document.querySelector(".cursor-effect").style.boxShadow = "0px 0px 200px 99px white";
    document.querySelector(".cursor-effect").style.width = "0px" ;
    document.querySelector(".cursor-effect").style.height = "0px" ;

   
    // document.querySelector(".inner-cursor").setAttribute("style", "animation-name: more-scale;animation-duration: 0.5s;animation-fill-mode: forwards;animation-delay: 0; border-radius:100%; width:40px");

// document.querySelector(".mouseNav .fa-arrow-down").style.display = "none";

})


colum_1.addEventListener("mouseout", function() {
    
    document.querySelector(".cursor-effect").style.boxShadow = "0px 0px 0px 0px white";
    document.querySelector(".cursor-effect").style.width = "10px" ;
    document.querySelector(".cursor-effect").style.height = "10px" ;


    // document.querySelector(".inner-cursor").setAttribute("style", "animation-name: less-scale;animation-duration: 0.5s;animation-fill-mode: forwards;animation-delay: 0;");
    // document.querySelector(".mouseNav .fa-arrow-down").style.display = "block";

})


// section one colum one event end


// section tow event start






let sec_2 = document.querySelector('.sec-2')

sec_2.addEventListener("mousemove", function(e) {

    document.querySelector(".cursor-effect").style.zIndex = "11";
    
    
    
    

})




