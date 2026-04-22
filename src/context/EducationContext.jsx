import { createContext, useEffect, useState } from "react";

export const EducationContext = createContext();

export const EducationProvider = ({ children }) => {

// safe Json Parse//
  const safeParse = (key, fallback) => {
    try {
      const saved = localStorage.getItem(key);
      if (!saved) return fallback;
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : fallback;
    } catch (err) {
      console.error("Invalid JSON in:", key, err);
      localStorage.removeItem(key); 
      return fallback;
    }
  };

  const [educations, setEducations] = useState(() =>
    safeParse("educations", [
      {
        school: "",
        degree: "",
        cgpa: "",
        startDate: "",
        endDate: ""
      }
    ])
  );

  useEffect(() => {
    localStorage.setItem("educations", JSON.stringify(educations));
  }, [educations]);

  const updateField = (index, field, value) => {
    setEducations(prev => {
      const copy = [...prev];
      copy[index][field] = value;
      return copy;
    });
  };

  const addEducation = () => {
    setEducations(prev => [
      ...prev,
      { school: "", degree: "", cgpa: "", startDate: "", endDate: "" }
    ]);
  };

  const deleteEducation = (index) => {
    setEducations(prev => prev.filter((_, i) => i !== index));
  };

const fillDummyEducation = (data) => {
  if (Array.isArray(data)) {
    setEducations(data);
  } else if (typeof data === "object" && data !== null) {
    // AI gave a single object → convert it to an array
    setEducations([data]);
  } else {
    // fallback
    setEducations([
      { school: "", degree: "", cgpa: "", startDate: "", endDate: "" }
    ]);
  }
};

  return (
    <EducationContext.Provider
      value={{
        educations,
        setEducations,
        updateField,
        addEducation,
        deleteEducation,
        fillDummyEducation
      }}
    >
      {children}
    </EducationContext.Provider>
  );
};