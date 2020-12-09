import {gsap} from "gsap"

const audioTL = gsap.timeline();

export function audioAnimation(){
    audioTL.from("#audio", {opacity:0, duration:3})
            .from(".playing", {opacity:0, stagger:.3, duration:4, ease:"back"})
            //.from("#gem-copy-4", {opacity:0, duration:5, xPercent:-300})
                .delay(10)

              
            
  return audioTL;

}