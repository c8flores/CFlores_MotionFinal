import {gsap} from "gsap"

const gemTL = gsap.timeline();

export function gemAnimation(){
    gemTL.from("#gem-copy-4", {opacity:0, stagger:1, duration:8, xPercent:-500})
                .delay(12.4)

              
            
  return gemTL;

}