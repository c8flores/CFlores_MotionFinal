import {gsap} from "gsap"

const marqueeleftTL = gsap.timeline();

export function marqueeleftAnimation(){
    marqueeleftTL.from("#marquee-turn-signal-left",{opacity:0, duration:1}) 
    .delay(7);  
    
  return marqueeleftTL;

}