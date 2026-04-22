import { createContext, useEffect, useState } from "react";

export const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {

  const [experience, setExperience] = useState(()=>{
    const saved=localStorage.getItem("experience");
    return saved ?JSON.parse(saved):[];
  });
  useEffect(()=>{
    localStorage.setItem("experience",JSON.stringify(experience))
  },[experience])

  const updateField = (field, value) => {
    setExperience((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  const fillDummyExperience = (data) => {
  setExperience(data);
};

  return (
    <ExperienceContext.Provider value={{ experience,setExperience, updateField,fillDummyExperience }}>
      {children}
    </ExperienceContext.Provider>
  );
};