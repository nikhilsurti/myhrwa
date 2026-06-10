import React from "react";

export default function SkillsForm({
  resumeData,
  skillInput,
  setSkillInput,
  addSkill,
  removeSkill,
}) {
  return (
    
    <div className="space-y-6">
                <h3 className="text-sm font-bold text-slate-900 border-l-4 border-blue-600 pl-2">Technical Skills</h3>
                <form onSubmit={addSkill} className="flex gap-2">
                  <input type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="Add skill (e.g. Node.js)" className="flex-1 px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold" />
                  <button type="submit" className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl">Add</button>
                </form>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      {skill}
                      <button type="button" onClick={() => removeSkill(skill)} className="text-[10px] text-red-500 font-bold ml-1">✕</button>
                    </span>
                  ))}
                </div>
              </div>
   
  );
}