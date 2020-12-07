import {gsap} from "gsap"

const gasTL = gsap.timeline();

export function gasAnimation(){
    gasTL.from("#gas-border", {opacity:0, duration:1, yPercent: 50})
        .from(".star", {opacity:0, stagger:0.06, ease:"back"})
        .delay(9);    
    
  return gasTL;

}
