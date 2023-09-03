import React from "react";
import useCheckPlatform from "../hooks/useCheckPlatform";
import LinkedIN from "../images/linkedIn.png";
import Twitter from "../images/twitter.png";
import "./styles.scss";

export default function About() {
  const isMobile = useCheckPlatform();
  return (
    <div
      style={{
        display: "flex",
        backgroundImage:
          "conic-gradient(white, #fce166, white,  #fce166,white)",
      }}
    >
      <div className={isMobile ? "MobileAboutContainer" : "AboutContainer"}>
        <div className="OuterContainer" />
        <div className="InnerContainer">
          <p className={isMobile ? "AboutTitle" : null}>About</p>
        </div>
        <div className={isMobile ? "AboutContentMobile" : "AboutContent"}></div>
        <div
          className={isMobile ? "AboutContentInnerMobile" : "AboutContentInner"}
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      {!isMobile ? (
        <>
          <div className="AboutContainer">
            <div style={{ marginLeft: 60 }}>
              <div className="OuterContainer" />
              <div className="InnerContainer">
                <p>Skills</p>
              </div>
              <div style={{ marginTop: 80 }}>
                <div className="SkillFlexBox">
                  <div>
                    <div className="SkillContentOuter"></div>
                    <div className="SkillContent">Project Management</div>
                  </div>
                  <div>
                    <div className="SkillContentOuter"></div>
                    <div className="SkillContent">Capacity Planning</div>
                  </div>
                  <div>
                    <div className="SkillContentOuter"></div>
                    <div className="SkillContent">Forecasting</div>
                  </div>
                  <div>
                    <div className="SkillContentOuter"></div>
                    <div className="SkillContent">Scheduling</div>
                  </div>
                  <div>
                    <div className="SkillContentOuter"></div>
                    <div className="SkillContent">Stakeholder Management</div>
                  </div>
                  <div>
                    <div className="SkillContentOuter"></div>
                    <div className="SkillContent">Reporting & Analysis</div>
                  </div>
                  <div>
                    <div className="SkillContentOuter"></div>
                    <div className="SkillContent">Problem Solving</div>
                  </div>
                  <div>
                    <div className="SkillContentOuter"></div>
                    <div className="SkillContent">Microsoft Excel</div>
                  </div>
                  <div>
                    <div className="SkillContentOuter"></div>
                    <div className="SkillContent">Operations</div>
                  </div>
                  <div>
                    <div className="SkillContentOuter"></div>
                    <div className="SkillContent">Team Management</div>
                  </div>
                  <div>
                    <div className="SkillContentOuter"></div>
                    <div className="SkillContent">Team Management</div>
                  </div>
                  <div>
                    <div className="SkillContentOuter"></div>
                    <div className="SkillContent">Microsoft PowerPoint</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={isMobile ? "MobileSocials" : "Socials"}>
            <a
              href="https://www.linkedin.com/in/abhilash-srinivasan-208484b3/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIN} alt="linkedIn" />
            </a>
            <a
              href="https://twitter.com/ankita24_riya"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="twitter" />
            </a>
          </div>
        </>
      ) : null}
    </div>
  );
}
