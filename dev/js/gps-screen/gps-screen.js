import {gsap} from "gsap"

const gpsTL = gsap.timeline();

export function gpsAnimation(){
  gpsTL.from(".dark",{opacity:0, duration:1, scale:1})
    .from("#gem-copy-2", {opacity:0})
    .from(".light", {opacity:0, stagger:0.07, duration:1, ease:"back"})
    .from("#gem-copy", {opacity:0})
    .delay(8);    
    
  return gpsTL;

}