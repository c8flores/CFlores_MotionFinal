import {gsap} from "gsap"

const logoTL = gsap.timeline();

export function logoAnimation(){
  logoTL.from(".small", {opacity:0, duration:5, yPercent:100})
  .delay(5)
    
    return logoTL;

}