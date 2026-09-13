import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            "swiper-container": any;
            "swiper-slide": any;
        }
    }
}

// Allows me to use Swiper JS 