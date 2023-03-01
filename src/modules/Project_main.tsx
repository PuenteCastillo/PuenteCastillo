import Image from "next/image";

import Xmi from "./images/projects/xmiimage.jpg";
import Little from "./images/projects/Little_Ceasars.jpg";
import Mile from "./images/projects/mile44.jpeg";
import Callaway from "./images/projects/callaway.jpg";
import Drakes from "./images/projects/drakes.png";
import RightArrow from "./images/projects/right_arrow.png";
import Project_one from "./images/projects/kbs_img.jpg";

export default function Project_main() {
  return (
    <div className="Project_main">
      <div className="container titleRow">
        <h2 className="sectionTitleTwo">Projects</h2>
      </div>
      <div className="scrollable">
        <div className="container projects_container">
          <a href="https://kbsgolfshafts.com/" target="_blank">
            <div className="project_box">
              <Image src={Project_one} alt="Project One" />
              <div className="project_parent">
                <div className="porject-center">
                  <h2> KBS </h2>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.xminstitute.com/" target="_blank">
            <div className="project_box">
              <Image src={Xmi} alt="Project One" />
              <div className="project_parent">
                <div className="porject-center">
                  <h2> Qualtrics </h2>
                </div>
              </div>
            </div>
          </a>

          <div className="project_box">
            <Image src={Little} alt="Project One" />
            <div className="project_parent">
              <div className="porject-center">
                <h2> Little Cesars </h2>
              </div>
            </div>
          </div>
          <a href="https://www.milefortyfour.com/" target="_blank">
            <div className="project_box">
              <Image src={Mile} alt="Project One" />
              <div className="project_parent">
                <div className="porject-center">
                  <h2> Mile 44</h2>
                </div>
              </div>
            </div>
          </a>

          <div className="project_box">
            <Image src={Callaway} alt="Project One" />
            <div className="project_parent">
              <div className="porject-center">
                <h2> Callaway </h2>
              </div>
            </div>
          </div>
          <a href="https://drakesorganic.com/" target="_blank">
            <div className="project_box">
              <Image src={Drakes} alt="Project One" />
              <div className="project_parent">
                <div className="porject-center">
                  <h2> Drakes </h2>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="bottom_scroll">
        Scroll
        <Image src={RightArrow} alt="Right Arrow" className="right_arrow" />
      </div>
    </div>
  );
}
