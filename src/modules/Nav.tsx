import Image from "next/image";
import Logo from "./images/Logo.png";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav_logo">
        <Image src={Logo} alt="logo" />
      </div>
    </div>
  );
}
