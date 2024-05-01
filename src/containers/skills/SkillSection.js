import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { importantWords, skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
// import { ReactTyped } from "react-typed";


function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      const ab  = skillSentence.split('/\s+/');
                      return (                     <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}>
                            {ab.map((word, index) => {
                              // Check if the word exists in the array
                              const isBold = importantWords.includes(word);
                              ;return isBold ? 'abcd' : <span key={index}>{word}</span>
                            })}
                          </p>
                                              );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
}

function BoldWords( sentence ) {
  // Split the sentence into words
  const words = sentence.split(/\s+/);

  return (
    <p>
      {words.map((word, index) => {
        // Check if the word exists in the array
        const isBold = importantWords.includes(word.toLowerCase());
        ;return isBold ? <strong key={index}>{word}</strong> : <span key={index}>{word}</span>
      })}
    </p>
  );
}
export default SkillSection;
