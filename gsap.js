
let tl = gsap.timeline({scrollTrigger:{

    trigger:".sec-2",
    // markers:true,
    start:"50% 50%",
    end:"100% 50%",
    
    scrub:2,
    pin:true,


}})


tl.to(".div-top",{
    top:"-50%",
},'a')

tl.to(".div-text-1",{
    marginTop:"20%",
},'a')



tl.to(".div-bottom",{
    bottom:"-50%",
},'a')



tl.to(".div-text-2",{
    marginBottom:"20%",
},'a')


tl.to(".div-center-content",{
    marginTop:"0%",
    transition:"0.5s",
},'a')

tl.to(".div-content",{
    top:"-200%",
    // transition:"0.5s"
},)




// ********** section three animation

// let tl_2 = gsap.timeline({scrollTrigger:{

//     trigger:".sec-3",
//     // markers:true,
//     start:"50% 50%",
//     end:"100% 50%",
    
//     scrub:5,
//     pin:true,


// },

// duration:"20s",
// })


// tl_2.to(".bg-image-main-1",{
//     top:"-150%",
    
// },'a')

// tl_2.to(".bg-image",{
    
        
// },'a')


// tl_2.to(".bg-image-main-2",{
//     bottom:"-150%",
    
// },'a')








// ********** section three animation

let tl_2 = gsap.timeline({scrollTrigger:{

    trigger:".sec-3",
    // markers:true,
    start:"50% 50%",
    end:"100% 50%",
    
    scrub:4,
    pin:true,


}})


tl_2.to(".bg-image-main-1",{
    top:"-320%",
    
},'a')

tl_2.to(".bg-image",{
    
    display:"block",    
},'a')


tl_2.to(".bg-image-main-2",{
    bottom:"-300%",
    opacity:1,
},'a')







// scroll top btn


// // Get a reference to the elements
// const triggerElement = document.querySelector(".div-top");
// const myElement = document.getElementById("go-top");

// // Create a GSAP timeline for the animation
// const animation = gsap.timeline({
//   scrollTrigger: {
//     trigger: triggerElement, // The trigger element
//     start: "top center",     // When to start the animation
//     end: "bottom center",    // When to end the animation
//     markers: true,           // Add markers for debugging (optional)
//     toggleClass: "d-block",  // Class to add when entering the trigger area
//     scrub: true,             // Smooth scrolling (optional)
//   },
// });

// // Define your animation inside the timeline
// animation.from(myElement, {
//   opacity: 0.5,
//   x: 100,
//   duration: 2,
//   ease: "power2.inOut",
// });
