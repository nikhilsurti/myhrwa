import React from "react";

const tabs = [
  { id: "personal", name: "Personal" },
  { id: "experience", name: "Experience" },
  { id: "education", name: "Education" },
  { id: "skills", name: "Skills" },
  { id: 'certifications', name: 'Certifications' },
  { id: 'projects', name: 'Projects' },
  { id: "extra", name: "Extra Sections" },


];

export default function ResumeTabs({ activeTab, setActiveTab }) {
  return (
    // <div className="flex border-b border-slate-100 sticky top-0 bg-white z-10 px-4 pt-3 overflow-x-auto gap-2">
    <div className="flex border-b border-slate-100 sticky top-0 bg-white z-50 px-4 pt-3 overflow-x-auto gap-2 shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-3 px-2 text-xs font-bold uppercase tracking-wider border-b-2 whitespace-nowrap transition-colors ${
            activeTab === tab.id
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-slate-400 hover:text-slate-600"
          }`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}