import {gsap} from "gsap"

const logoTL = gsap.timeline();

export function logoAnimation(){
  logoTL.from("#big-mustang-logo", {alpha:1, duration:4, yPercent:50})
        .from("#mustang-logo", {opacity:0, duration:5})
    
    return logoTL;

}