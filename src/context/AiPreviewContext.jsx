import { createContext, useState } from "react";

export const AiPreviewContext = createContext();

export const AiPreviewProvider = ({ children }) => {
  const [aiPreviewData, setAiPreviewData] = useState(null); // store AI resume here
 const [loadingAI,setLoadingAI]=useState(false)
  return (
    <AiPreviewContext.Provider value={{ aiPreviewData, setAiPreviewData,loadingAI,setLoadingAI }}>
      {children}
    </AiPreviewContext.Provider>
  );
};