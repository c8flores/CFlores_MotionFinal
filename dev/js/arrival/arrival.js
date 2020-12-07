import {gsap} from "gsap"

const arrivalTL = gsap.timeline();

export function arrivalAnimation(){
    arrivalTL.from("#arrival", {opacity:0, yPercent:300, duration:3})
                .delay(15)
            
  return arrivalTL;

}