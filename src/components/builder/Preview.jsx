import { useRef, useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import Template1 from "./Template";
import "../../styles/preview.css";

import { EducationContext } from "../../context/EducationContext";
import { PersonalInfoContext } from "../../context/PersonalInfoContext";
import { SkillsContext } from "../../context/SkillsContext";
import { ProjectsContext } from "../../context/ProjectsContext";
import { ExperienceContext } from "../../context/ExperienceContext";
import { CertificationsContext } from "../../context/CertificationsContext";
import { AiPreviewContext } from "../../context/AiPreviewContext";

import AIPreview from "./AIPreview";

function Preview() {
  const [mode, setMode] = useState("preview");
  const componentRef = useRef();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  // CONTEXTS
  const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);
  const { educations, setEducations } = useContext(EducationContext);
  const { skills, setSkills } = useContext(SkillsContext);
  const { projects, setProjects } = useContext(ProjectsContext);
  const { experience, setExperience } = useContext(ExperienceContext);
  const { certifications, setCertifications } = useContext(CertificationsContext);

  const { aiPreviewData, loadingAI, setLoadingAI } = useContext(AiPreviewContext);

  // PRINT PDF
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: ""
  });

  // When AI finishes → update ALL contexts
  const handleAIResult = (data) => {
    if (!data) return;

    setMode("ai"); // Switch back to preview
  };

  return (
    <div className="previewdata">
      {/* HEADER */}
      <div className="preview-header">
        <div className="left-buttons">
          <button onClick={() => setMode("preview")}>Preview</button>
          <button onClick={() => setMode("ai")}>AI Preview</button>
        </div>

        <button className="download-btn" onClick={handlePrint}>
          Export PDF
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="preview-content">
      
        <div ref={componentRef}>
          {mode === "preview" ? (
            <Template1 isBeginner={type === "fresher"} />
          ) : (
            <AIPreview
              type={type}
              personalInfo={personalInfo}
              education={educations}
              skills={skills}
              projects={projects}
              experience={experience}
              certifications={certifications}
              onResult={handleAIResult}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Preview;