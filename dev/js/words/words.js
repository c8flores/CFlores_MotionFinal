import {gsap} from "gsap"

const wordsTL = gsap.timeline();

export function wordsAnimation(){
    wordsTL.from("#HELLO-MS-EVANS", {yPercent:200, duration:2})
            .to("#HELLO-MS-EVANS", {alpha:0, duration:6})
            .delay(5)
            
  return wordsTL;

}