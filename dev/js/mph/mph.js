import {gsap} from "gsap"

const mphTL = gsap.timeline();

export function mphAnimation(){
  mphTL.from("#speedometer-circle-mph",{opacity:0, duration:1, scale: 1})
    .from(".s-logo", {opacity: 0, duration:0.5, scale: 2, ease:"back"})      
    .from(".lines", {opacity: 0, stagger:0.03, duration:0.01, ease:"back"})
    .from(".speeds", {opacity: 0, stagger:0.02, duration:0.02, ease:"back"})     
    
  return mphTL;

}