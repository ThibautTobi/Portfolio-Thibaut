import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin); 

export function SlideLeft (e){

    gsap.fromTo(
        e,{
            opacity:0,
            x: -200,
        },
        {
            opacity:1,
            x:0,
            delay: 0.5,
            duration: 0.6,
            scrollTrigger: {
                trigger:e,
                start:"top center",
                end: "botten center"
            }
        }
    )
};