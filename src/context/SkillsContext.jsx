import { createContext, useState,useEffect } from "react";

export const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
 const [skills, setSkills] = useState(() => {
  const saved = localStorage.getItem("skills");
  return saved
    ? JSON.parse(saved)
    : {
        technical: [],
        soft: [],
        tools: []
      };
});

useEffect(() => {
  localStorage.setItem("skills", JSON.stringify(skills));
}, [skills]);
const fillDummySkills = (data) => {
  setSkills(data);
};
  return (
    <SkillsContext.Provider value={{ skills, setSkills,fillDummySkills }}>
      {children}
    </SkillsContext.Provider>
  );
};