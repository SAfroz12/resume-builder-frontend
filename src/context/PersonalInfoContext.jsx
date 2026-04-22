import { createContext, useState,useEffect } from "react";

export const PersonalInfoContext = createContext();

export const PersonalInfoProvider = ({ children }) => {

const [personalInfo, setPersonalInfo] = useState(() => {
    const saved = localStorage.getItem("personalInfo");
    return saved
      ? JSON.parse(saved)
      : {
          fullName: "",
          email: "",
          phone: "",
          location: "",
          github: "",
          linkedin: "",
          summary: ""
         
        };
  });

   useEffect(() => {
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
  }, [personalInfo]);

  const updateField = (field, value) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };
const fillDummyPersonalInfo = (data) => {
  setPersonalInfo(data);
};
  return (
    <PersonalInfoContext.Provider value={{ personalInfo, setPersonalInfo,
    updateField,fillDummyPersonalInfo }}>
      {children}
    </PersonalInfoContext.Provider>
  );
};