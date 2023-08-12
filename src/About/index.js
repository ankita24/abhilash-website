import React from "react";
import { hr } from "./styles.scss";

export default function About() {
  return (
    <div style={{ display: "flex" }}>
      <div className="AboutContainer">
        <div className="OuterContainer" />
        <div className="InnerContainer">
          <p>About</p>
        </div>
        <div className="AboutContent">
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
      <div className="hr" />
      <div className="AboutContainer">
        <div className="OuterContainer" />
        <div className="InnerContainer">
          <p>Skills</p>
        </div>
        <div style={{marginTop:80}}>
          <div className="SkillFlexBox">
            <div className="SkillContent">React JS</div>
            <div className="SkillContent">React JS</div>
            <div className="SkillContent">React JS</div>
            <div className="SkillContent">React JS</div>
            <div className="SkillContent">React JS</div>
            <div className="SkillContent">React JS</div>
            <div className="SkillContent">React JS</div>
            <div className="SkillContent">React JS</div>
            <div className="SkillContent">React JS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
