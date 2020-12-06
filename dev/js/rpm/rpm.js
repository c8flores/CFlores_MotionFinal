import {gsap} from "gsap"

const rpmTL = gsap.timeline();

export function rpmAnimation(){
  rpmTL.from("#speedometer-circle-rpm",{opacity:0, xPercent:100, duration:1, scale:1})
    .from(".e-logo", {opacity:0, duration:0.5, scale:2, ease:"back"})      
    .from(".liness", {opacity:0, stagger:0.03, duration:0.01, ease:"back"})
    .from(".numbers", {opacity:0, stagger:0.02, duration:0.02, ease:"back"})
    .delay(5);    
    
  return rpmTL;

}