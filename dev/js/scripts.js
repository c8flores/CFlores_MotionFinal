import {gsap} from "gsap";


import {logoAnimation} from "./mustang-logo/mustang-logo.js"



const mainTL = gsap.timeline()
.add(logoAnimation());