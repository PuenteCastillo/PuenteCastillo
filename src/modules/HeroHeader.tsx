import Image from "next/image";
import { useEffect } from "react";

/// images
import Clouds from "../../public/images/clouds.png";
import Deer from "../../public/images/deer.png";
import Lake from "../../public/images/lake.png";
import mounts from "../../public/images/mounts.png";
import Sun from "../../public/images/sun.png";
import Tree from "../../public/images/trees.png";
import Placeholder from "../../public/images/placeholder.png";
import CloudTwo from "../../public/images/cloudsTwo.png";

export default function HeroHeader() {
  useEffect(() => {
    console.log("hello");

    // build tween
    // var tween = new TimelineMax().add([
    //   TweenMax.fromTo(".Clouds", 3.5, { y: -100 }, { y: 400 }),
    //   TweenMax.fromTo(".CloudTwo", 3.5, { y: -100 }, { y: 400 }),
    //   TweenMax.fromTo(".Sun", 3.5, { y: -200 }, { y: 500 }),
    //   TweenMax.fromTo(".Lake", 3, { y: -40 }, { y: 500 }),
    //   TweenMax.fromTo(".mounts", 2.5, { y: -30 }, { y: 250 }),
    //   TweenMax.fromTo(".Tree", 2, { y: -0 }, { y: 100 }),

    //   TweenMax.to(".headerChild", 3.5, { y: 200 }),
    // ]);

    //     // build scene
    //     const controller = new ScrollMagic.Controller();
    //     const scene = new ScrollMagic.Scene({
    //       triggerElement: ".trigger",

    //       triggerHook: 0,
    //       duration: "150%",
    //     })

    //       .setTween(tween)
    //       .addIndicators()
    //       .addTo(controller);

    gsap.to(".Sun", 3.5, {
      scrollTrigger: {
        // trigger: ".trigger",
        scroller: ".child",
        start: "center center",
        end: "bottom center",
        scrub: 1,
      },
      y: 300,
      scale: 1.5,
    });
    gsap.to(".Clouds, .CloudTwo", 3.5, {
      scrollTrigger: {
        // trigger: ".trigger",
        scroller: ".child",
        start: "center center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
      y: 200,
    });

    gsap.to(".Lake", 3, {
      scrollTrigger: {
        // trigger: ".trigger",
        scroller: ".child",
        start: "center center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
      y: 400,
      scale: 1.2,
    });

    gsap.to(".mounts", 2.5, {
      scrollTrigger: {
        // trigger: ".trigger",
        scroller: ".child",
        start: "center center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
      y: 100,
      scale: 1.2,
    });

    gsap.to(".Tree", 2, {
      scrollTrigger: {
        // trigger: ".trigger",
        scroller: ".child",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
      y: 40,
      //   scale: 1.3,
    });

    gsap.to(".headerChild", 0.5, {
      scrollTrigger: {
        // trigger: ".trigger",
        scroller: ".child",
        start: "center center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
      y: -1000,
      //   delay: 3,
    });
  }, []);

  return (
    <>
      <section className="hero">
        {/* <div className="header-content">
          <div className="headerChild">
            <h1>jdskljsdf </h1>
          </div>
        </div> */}
        <div className="hero_images">
          <Image className="CloudTwo" src={CloudTwo} />
          <Image className="Sun" src={Sun} />

          <Image className="Lake" src={Lake} />
          <Image className="Clouds" src={Clouds} />
          <Image className="mounts" src={mounts} />
          <Image className="Tree" src={Tree} />
          <Image className="deer" src={Deer} />

          <Image className="main-image" src={Placeholder} />
        </div>
      </section>
    </>
  );
}
