import { Puck } from "@measured/puck";
import type { Data } from "@measured/puck";
import "@measured/puck/puck.css";
import { config } from "../puck.config";
import { useNavigate } from "react-router-dom";

// Key for localStorage
const STORAGE_KEY = "puck-page-data";

// Load saved data from localStorage
const getInitialData = (): Data => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  return { content: [], root: {} };
};

export function Editor() {
  const navigate = useNavigate();

  const handlePublish = (data: Data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    alert("Page published! Click OK to preview.");
    navigate("/preview");
  };

  return (
    <Puck
      config={config}
      data={getInitialData()}
      onPublish={handlePublish}
    />
  );
}
