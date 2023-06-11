import { useEffect } from "react";
import { Link } from "react-scroll";
import {FaArrowUp} from 'react-icons/fa'
const ScrollUp = () => {

  const scrollListener = () => {
    const scrollPosition = document.querySelector("#showArr");
    if (window.scrollY >= 450) scrollPosition.classList.add("bottom-[4rem]");
    else scrollPosition.classList.remove("bottom-[4rem]");
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
  }, []);

  return (
    <Link
      id="showArr"
      to="home"
      style={{ cursor: "pointer" }}
      className="fixed px-2 py-3 bottom-[-4rem] right-[2.5rem] rounded-[0.4rem] duration-[0.6s] ease-in-out z-[999] bg-[#D9ACF5]"
      spy={true}
      smooth={true}
      duration={80}
    >
      <FaArrowUp size={20}/>
    </Link>
  );
};

export default ScrollUp;