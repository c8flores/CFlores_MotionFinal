import {gsap} from "gsap"

const biglogoTL = gsap.timeline();

export function biglogoAnimation(){
  biglogoTL.from("#big-mustang-logo", {opacity:0, duration:2, xPercent:100})
          .from("#MUSTANG", {opacity:0, duration:2, xPercent:-100})
        .to("#big-mustang-logo", {alpha:0, duration:2})
        .to("#MUSTANG", {alpha:0, duration:2})
    
    return biglogoTL;

}