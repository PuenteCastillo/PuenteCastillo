import Image from "next/image";

import Project_one from "../../public/images/projects/5N8A2932.JPG";
import Project_two from "../../public/images/projects/5N8A2429.JPG";
import Project_three from "../../public/images/projects/5N8A2508.JPG";
import Capture from "../../public/images/projects/capture.png";
import XMI from "../../public/images/projects/xmi.png";
import Little from "../../public/images/projects/Little_Ceasars.jpg";
import Mile from "../../public/images/projects/mile44.jpeg";
import Callaway from "../../public/images/projects/callaway.jpg";
import Drakes from "../../public/images/projects/drakes.png";
import RightArrow from "../../public/images/projects/right_arrow.png";

export default function Project_main() {
  return (
    <div className="Project_main">
      <div className="container titleRow">
        <h2>Projects</h2>
      </div>
      <div className="scrollable">
        <div className="container projects_container">
          <div className="project_box">
            <Image src={Project_one} alt="Project One" />
            <div className="project_parent">
              <div className="porject-center">
                <h2> KBS </h2>
              </div>
            </div>
          </div>
          <div className="project_box">
            <Image src={XMI} alt="Project One" />
            <div className="project_parent">
              <div className="porject-center">
                <h2> Qualtrics </h2>
              </div>
            </div>
          </div>
          <div className="project_box">
            <Image src={Little} alt="Project One" />
            <div className="project_parent">
              <div className="porject-center">
                <h2> Little Cesars </h2>
              </div>
            </div>
          </div>
          <div className="project_box">
            <Image src={Mile} alt="Project One" />
            <div className="project_parent">
              <div className="porject-center">
                <h2> Mile 44</h2>
              </div>
            </div>
          </div>
          <div className="project_box">
            <Image src={Callaway} alt="Project One" />
            <div className="project_parent">
              <div className="porject-center">
                <h2> Callaway </h2>
              </div>
            </div>
          </div>
          <div className="project_box">
            <Image src={Drakes} alt="Project One" />
            <div className="project_parent">
              <div className="porject-center">
                <h2> Drakes </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_scroll">
        Scroll
        <Image src={RightArrow} alt="Right Arrow" className="right_arrow" />
      </div>
    </div>
  );
}
