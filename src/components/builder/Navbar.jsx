import { useContext } from "react";
import { dummyData } from "../../utils/dummyData";

import { PersonalInfoContext } from "../../context/PersonalInfoContext";
import { EducationContext } from "../../context/EducationContext";
import { SkillsContext } from "../../context/SkillsContext";
import { ProjectsContext } from "../../context/ProjectsContext";
import { ExperienceContext } from "../../context/ExperienceContext";
import { CertificationsContext } from "../../context/CertificationsContext";
import { useNavigate } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
const navigate=useNavigate();
  const { fillDummyPersonalInfo } = useContext(PersonalInfoContext);
  const { fillDummyEducation } = useContext(EducationContext);
  const { fillDummySkills } = useContext(SkillsContext);
  const { fillDummyProjects } = useContext(ProjectsContext);
  const { fillDummyExperience } = useContext(ExperienceContext);
  const { fillDummyCertifications } = useContext(CertificationsContext);

  const handleFillDummy = () => {
    fillDummyPersonalInfo(dummyData.personalInfo);
    fillDummyEducation(dummyData.education);
    fillDummySkills(dummyData.skills);
    fillDummyProjects(dummyData.projects);
    fillDummyExperience(dummyData.experience);
    fillDummyCertifications(dummyData.certifications);
  };

  return (
    <>

<div className="navbar">
  <h1 className="logo" >
   <span onClick={()=>navigate("/")}>
     Resume Builder
   </span>
  </h1>

  <div className="nav-actions">
    <button
      className="template-btn"
      onClick={() => navigate("/homepage")}
    >
      Templates
    </button>

    <button className="fill-btn" onClick={handleFillDummy}>
      Fill Dummy Data
    </button>
  </div>
</div>
  
    </>

  );
}

export default Navbar;