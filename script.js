// var tl=gsap.timeline({scrollTrigger:{
//     trigger:".two",
//     // scroller:"body",
//     markers:true,
//     start:"0% 90%",
//     end:"50% 50%",
//     scrub:true,

// }});

// gsap.from("#fanta",{
//     X:1000,
//     y:5000,
//     y:5,
//     duration:3,
// })
var tl=gsap.timeline();

// tl.from("#hero-text1",{
//     left:-2000,
//     opacity:0,
//     duration:3,
// })
gsap.from("nav h1,.nav-part2,.nav-part3",{
    y:-100,
    x:50,
    opacity:0,
    duration:2,
    stagger:0.6,
})
gsap.from("#hero-text1",{
    x:500,
    opacity:0,
    duration:2,
})
gsap.from("#hero-text3",{
   
    x:-500,
    opacity:0,
    duration:2,
})


tl.to("#fanta",{
    duration:2,
    // rotate:360,
    y:"150%",
    x:"-60%",
    scrollTrigger:{
        trigger:".two",
        scroller:"body",
        // markers:true,
        start:"0% 90%",
        end:"50% 50%",
        scrub:true,  

    }

},'orange')

tl.to("#orange-slice",{
    duration:2,
    y:"290%",
    x:"-90%",
    scrollTrigger:{
        trigger:".two",
        scroller:"body",
        // markers:true,
        start:"0% 90%",
        end:"50% 50%",
        scrub:true,  

    }
    
},'orange')

tl.to("#orange",{
    duration:3,
    y:"320%",
    x:"90%",
    scrollTrigger:{
        trigger:".two",
        scroller:"body",
        // markers:true,
        start:"0% 90%",
        end:"50% 50%",
        scrub:true,  

    }
    
},'orange')
tl.to("#leaf1",{
    duration:3,
    y:700,
    x:800,
    rotate:"90deg",
    scrollTrigger:{
        trigger:".two",
        scroller:"body",
        // markers:true,
        start:"0% 90%",
        end:"50% 50%",
        scrub:true,  

    }
    
},'orange');


// let tl2=gsap.timeline({scrollTrigger:{
//     trigger:".three",
//     start:"0% 95%",
//     end:"70% 50%",
//     scrub:true,
//     markers:true,
// }})
let tl2=gsap.timeline();
tl2.from("#sprite",{
    rotate:"-90deg",
    duration:2,
    scrollTrigger:{
        trigger:".three",
        scroller:"body",
        // markers:true,
        start:"40% 100%",
        end:"50% 50%",
        scrub:true,  

    }
})
tl2.from("#cocacola",{
    rotate:"90deg",
    duration:2,
    scrollTrigger:{
        trigger:".three",
        scroller:"body",
        // markers:true,
        start:"40% 100%",
        end:"50% 50%",
        scrub:true,  

    }
})
tl2.to("#fanta",{
    left:"54.45%",
    top:"125%",
    width:"40%",
    height:"60%",
    duration:2,
    scrollTrigger:{
        trigger:".three",
        scroller:"body",
        start:"30% 100%",
        end:"50% 50%",
        scrub:true,  
    }
})
tl2.to("#orange-slice",{
    left:"57%",
    top:"100%",
    duration:2,
    scrollTrigger:{
        trigger:".three",
        scroller:"body",
        start:"20% 100%",
        end:"50% 50%",
        scrub:true,  
    }
})

var st=gsap.scrollTrigger({
     trigger:".three",
        scroller:"body",
        // markers:true,
        start:"40% 100%",
        end:"50% 50%",
        scrub:true,  
})
