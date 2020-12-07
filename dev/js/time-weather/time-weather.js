import {gsap} from "gsap"

const timeTL = gsap.timeline();

export function timeAnimation(){
    timeTL.from(".time", {opacity:0, xPercent:-50, duration:1})
          .from(".weather", {opacity:0, xPercent: 50, duration:1})
          .delay(4.5)
            
  return timeTL;

}