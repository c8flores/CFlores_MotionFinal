import {gsap} from "gsap"

const logoTL = gsap.timeline();


export function logoAnimation(){
    logoTL.from("mustang-logo", {duration:3, y:1000});
    
    return logoTL;

}