import React from "react";
import "./styles.scss";

export default function index() {
  return (
    <div
      style={{
        display: "flex",
        backgroundImage:
          "conic-gradient(white, #fce166, white,  #fce166,white)",
      }}
    >
      <div className="SkillAboutContainerMobile">
        <div>
          <div className="OuterContainer" />
          <div className="MobileInnerContainer">
            <p>Skills</p>
          </div>
          <div style={{ marginTop: 20 }}>
            <div className="SkillFlexBoxMobile">
              <div>
                <div className="SkillContentOuter"></div>
                <div className="SkillContentMobile">Project Management</div>
              </div>
              <div>
                <div className="SkillContentOuter"></div>
                <div className="SkillContentMobile">Capacity Planning</div>
              </div>
              <div>
                <div className="SkillContentOuter"></div>
                <div className="SkillContentMobile">Forecasting</div>
              </div>
              <div>
                <div className="SkillContentOuter"></div>
                <div className="SkillContentMobile">Scheduling</div>
              </div>
              <div>
                <div className="SkillContentOuter"></div>
                <div className="SkillContentMobile">Stakeholder Management</div>
              </div>
              <div>
                <div className="SkillContentOuter"></div>
                <div className="SkillContentMobile">Reporting & Analysis</div>
              </div>
              <div>
                <div className="SkillContentOuter"></div>
                <div className="SkillContentMobile">Problem Solving</div>
              </div>
              <div>
                <div className="SkillContentOuter"></div>
                <div className="SkillContentMobile">Microsoft Excel</div>
              </div>
              <div>
                <div className="SkillContentOuter"></div>
                <div className="SkillContentMobile">Operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
