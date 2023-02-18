import { useEffect } from "react";

import Image from "next/image";
import Profile from "../../public/images/profilePic.png";
import Blob from "../../public/images/blob.png";
import Yay from "../../public/images/yay.png";
import AvatarOverlay from "../../public/images/avatarOverlay.png";

export default function About() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".yay", 1, {
        scrollTrigger: {
          trigger: ".imagecontainer",
          scroller: ".child",
          start: "top center",
          end: "500 center",
          scrub: 1,
          // markers: true,
        },
        scale: 1.1,
      });

      gsap.from(".sectionTitle", 1, {
        y: -20,
        // opacity: 0,
        scrollTrigger: {
          trigger: ".imagecontainer",
          scroller: ".child",
          start: "top center",
          end: "300 center",
          scrub: 1,
          // markers: true,
        },
      });
    }); // <- scope!!!

    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <section className="About_Section">
      <div className="container">
        <h2 className="sectionTitle"> About</h2>
        <div className="row">
          <div className="col-lg-6 position_relative ">
            <div className="imagecontainer">
              <Image className="profile_img" src={Blob} alt="Profile Picture" />
              <Image className="avatar yay" src={Yay} alt="Profile Picture" />
              <Image
                className="avatar"
                src={AvatarOverlay}
                alt="Profile Picture"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="About_Section__content">
              <div className="center_content">
                <h2>Tom</h2>
                <h2>Riddle</h2>
                <div className="subhead">
                  <p>About</p>
                </div>
                <div className="copy">
                  <p>
                    Full Stack Web Developer with a background in Photography,
                    videography, and marketing. Effective at combining
                    creativity and problem solving to develop user-friendly
                    applications. Known among staff for strong wit and attention
                    to detail no matter the complexity of the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
