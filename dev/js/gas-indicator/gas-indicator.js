import {gsap} from "gsap"

const gasTL = gsap.timeline();

export function gasAnimation(){
    gasTL.from("#gas-border",{opacity:0, duration:1, yPercent: 50})
        .from(".star", {opacity:0, stagger:0.05, ease:"back"})
    //.from(".light", {opacity:0, stagger:0.07, duration:1, ease:"back"})
    //.from("#gem-copy", {opacity:0})
    .delay(8);    
    
  return gasTL;

}