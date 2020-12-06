import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


import {logoAnimation} from "./mustang-logo/mustang-logo.js"


const logoTL = gsap.timeline()
    logoTL.add(logoAnimation());


import {mphAnimation} from "./mph/mph.js"


const mphTL = gsap.timeline()
    mphTL.add(mphAnimation());



import {rpmAnimation} from "./rpm/rpm.js"


const rpmTL = gsap.timeline()
    rpmTL.add(rpmAnimation());






//instantiate GSDevTools with default settings
GSDevTools.create();