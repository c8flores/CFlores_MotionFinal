import {gsap} from "gsap"

const logoTL = gsap.timeline();

export function logoAnimation(){
  logoTL.from("#mustang-logo", {opacity:0, duration:5});
    
    return logoTL;

}