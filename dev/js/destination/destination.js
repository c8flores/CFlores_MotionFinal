import {gsap} from "gsap"

const destinationTL = gsap.timeline();

export function destinationAnimation(){
    destinationTL.from("#destination", {yPercent:300, duration:3})
                .to("#destination", {alpha:0, duration:7})
                .delay(11.5)
            
  return destinationTL;

}