import useCheckPlatform from "./hooks/useCheckPlatform";
import { useRef, useState } from "react";
import potrait from "./images/abhilash.png";
import threeLineMenuIcon from "./images/threeLineMenuIcon.jpeg";
import "./App.scss";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";

function App() {
  const isMobile = useCheckPlatform();
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <div className="App" ref={aboutRef}>
      <div className={isMobile ? "MobileContainer" : "Container"}>
        {!isMobile ? (
          <>
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
                href="#"
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
                style={{
                  width: isMobile ? 40 : 80,
                  height: isMobile ? 40 : 80,
                }}
                alt="Ankita"
              />
            </div>
          </>
        ) : (
          <>
            <img
              src={threeLineMenuIcon}
              alt="menu"
              style={{ width: 20, height: 20, padding: 4 }}
              onClick={() => setOpen(!open)}
            />
            <div className="TitleBox">
              <img
                src={potrait}
                style={{
                  width: isMobile ? 40 : 80,
                  height: isMobile ? 40 : 80,
                }}
                alt="Ankita"
              />
            </div>
          </>
        )}
      </div>
      {isMobile && open && (
        <div>
          <>
            <div className="MobileContainerOpen MobileNavbar">
              <div
                className="hover-underline-animation"
                onClick={() => {
                  aboutRef.current?.scrollIntoView({ behavior: "smooth" });

                  setOpen(false);
                }}
              >
                About
              </div>
              <div
                className="hover-underline-animation"
                onClick={() => {
                  skillsRef.current?.scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
              >
                Skills
              </div>
              <div
                className="hover-underline-animation"
                onClick={() => {
                  workRef.current?.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                    block: "nearest",
                  });
                  setOpen(false);
                }}
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
          </>
        </div>
      )}

      <About />
      {isMobile && (
        <div ref={skillsRef}>
          <Skills />
        </div>
      )}
      <div ref={workRef}>
        <Work />
      </div>
    </div>
  );
}

export default App;
