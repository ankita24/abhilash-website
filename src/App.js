import useCheckPlatform from "./hooks/useCheckPlatform";
import { useRef } from "react";
import potrait from "./images/abhilash.png";
import "./App.scss";
import About from "./About";
import Work from "./Work";

function App() {
  const isMobile = useCheckPlatform();
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <div className="App" ref={aboutRef}>
      <div className={isMobile ? "MobileContainer" : "Container"}>
        <div
          className={
            isMobile ? "MobileContainer MobileNavbar" : "Container Navbar"
          }
        >
          <div
            className="hover-underline-animation"
            onClick={() =>
              aboutRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </div>
          <div
            className="hover-underline-animation"
            onClick={() =>
              workRef.current?.scrollIntoView({
                behavior: "smooth",
                inline: "start",
                block: "nearest",
              })
            }
          >
            Work Experience
          </div>
          <a
            style={{ textDecoration: "none" }}
            className="hover-underline-animation"
            href={"#"}
            without
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="hover-underline-animation"
            href="mailto:riya.ankita24@gmail.com"
          >
            Contact
          </a>
        </div>
        <div className="TitleBox">
          <img
            src={potrait}
            style={{ width: isMobile ? 40 : 80, height: isMobile ? 40 : 80 }}
            alt="Ankita"
          />
        </div>
      </div>
      <About />
      <div ref={workRef}>
        <Work />
      </div>
    </div>
  );
}

export default App;
