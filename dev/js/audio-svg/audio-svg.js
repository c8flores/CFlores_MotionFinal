import {gsap} from "gsap"

const audioTL = gsap.timeline();

export function audioAnimation(){
    audioTL.from("#audio", {opacity:0, duration:3})
                .delay(7)
            
  return audioTL;

}