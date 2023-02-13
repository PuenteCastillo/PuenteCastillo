import Image from "next/image";
import Logo from "../../public/images/logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social_icons">
        <a href="">
          {" "}
          <i class="fa-brands fa-linkedin"></i>{" "}
        </a>
        <a href="">
          {" "}
          <i class="fa-solid fa-envelope"></i>{" "}
        </a>
        <a href="">
          {" "}
          <i class="fa-brands fa-instagram"></i>{" "}
        </a>
        <a href="">
          {" "}
          <i class="fa-brands fa-github"></i>{" "}
        </a>
      </div>
    </div>
  );
}
