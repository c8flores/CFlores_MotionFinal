import {gsap} from "gsap"

const marqueerightTL = gsap.timeline();

export function marqueerightAnimation(){
    marqueerightTL.from("#marquee-turn-signal-right",{opacity:0, duration:1}) 
    .delay(7);  
    
  return marqueerightTL;

}