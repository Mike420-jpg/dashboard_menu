import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            "swiper-container": {
                init?: string;
                slidesPerView?: string;
                "slides-per-view"?: string;
                spaceBetween?: string;
                "space-between"?: string;
                pagination?: string;
                navigation?: string;
                loop?: string;
                autoplay?: string;
                "autoplay-delay"?: string;
                "autoplay-disable-on-interaction"?: string;
                speed?: string;
                className?: string;
                children?: React.ReactNode;
            };
            "swiper-slide": {
                className?: string;
                children?: React.ReactNode;
            };
        }
    }
}

// Allows me to use Swiper JS 