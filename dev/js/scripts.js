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
    
    
import {gasAnimation} from "./gas-indicator/gas-indicator.js"

const gasTL = gsap.timeline()
    gasTL.add(gasAnimation());


import {wordsAnimation} from "./words/words.js"

const wordsTL = gsap.timeline()
    wordsTL.add(wordsAnimation()); 


import {timeAnimation} from "./time-weather/time-weather.js"

const timeTL = gsap.timeline()
    timeTL.add(timeAnimation());


import {destinationAnimation} from "./destination/destination.js"

const destinationTL = gsap.timeline()
    destinationTL.add(destinationAnimation());


import {arrivalAnimation} from "./arrival/arrival.js"

const arrivalTL = gsap.timeline()
    arrivalTL.add(arrivalAnimation());
    

import {audioAnimation} from "./audio-svg/audio-svg.js"

const audioTL = gsap.timeline()
    audioTL.add(audioAnimation());

    
import {gemAnimation} from "./audio-svg/gem.js"

const gemTL = gsap.timeline()
    gemTL.add(gemAnimation());


//instantiate GSDevTools with default settings
GSDevTools.create();