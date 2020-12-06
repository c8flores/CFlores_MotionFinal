import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


import {biglogoAnimation} from "./big-mustang-logo/big-mustang-logo.js"

const biglogoTL = gsap.timeline()
biglogoTL.add(biglogoAnimation());


import {logoAnimation} from "./mustang-logo/mustang-logo.js"

const logoTL = gsap.timeline()
    logoTL.add(logoAnimation());


import {mphAnimation} from "./mph/mph.js"

const mphTL = gsap.timeline()
    mphTL.add(mphAnimation());


import {rpmAnimation} from "./rpm/rpm.js"

const rpmTL = gsap.timeline()
    rpmTL.add(rpmAnimation());


import {marqueerightAnimation} from "./marquee-right/marquee-right.js"

const marqueerightTL = gsap.timeline()
    marqueerightTL.add(marqueerightAnimation());


import {marqueeleftAnimation} from "./marquee-left/marquee-left.js"

const marqueeleftTL = gsap.timeline()
    marqueeleftTL.add(marqueeleftAnimation());

 
import {gpsAnimation} from "./gps-screen/gps-screen.js"

const gpsTL = gsap.timeline()
    gpsTL.add(gpsAnimation());    





//instantiate GSDevTools with default settings
GSDevTools.create();