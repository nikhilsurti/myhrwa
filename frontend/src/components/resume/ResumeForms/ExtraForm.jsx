import React from "react";

export default function ExtraForm({
  resumeData,
  achInput,
  setAchInput,
  addAchievement,
  removeAchievement,
  langInput,
  setLangInput,
  addLanguage,
  removeLanguage,
  actInput,
  setActInput,
  addActivity,
  removeActivity,
}) {
  return (
    
      <div className="space-y-8">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 border-l-2 border-indigo-600 pl-2 uppercase">Achievements</h4>
                  <form onSubmit={addAchievement} className="flex gap-2">
                    <input type="text" value={achInput} onChange={(e) => setAchInput(e.target.value)} placeholder="e.g. Won Hackathon" className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-xs" />
                    <button type="submit" className="px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg">Add</button>
                  </form>
                  <div className="space-y-1">
                    {resumeData.achievements.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg">
                        <span className="font-medium text-slate-700">{item}</span>
                        <button onClick={() => removeAchievement(idx)} className="text-[10px] text-red-500 font-bold">✕</button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 border-l-2 border-indigo-600 pl-2 uppercase">Languages</h4>
                  <form onSubmit={addLanguage} className="flex gap-2">
                    <input type="text" value={langInput} onChange={(e) => setLangInput(e.target.value)} placeholder="e.g. French (Fluent)" className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-xs" />
                    <button type="submit" className="px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg">Add</button>
                  </form>
                  <div className="space-y-1">
                    {resumeData.languages.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg">
                        <span className="font-medium text-slate-700">{item}</span>
                        <button onClick={() => removeLanguage(idx)} className="text-[10px] text-red-500 font-bold">✕</button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 border-l-2 border-indigo-600 pl-2 uppercase">Activities & Interests</h4>
                  <form onSubmit={addActivity} className="flex gap-2">
                    <input type="text" value={actInput} onChange={(e) => setActInput(e.target.value)} placeholder="e.g. Technical Writing" className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-xs" />
                    <button type="submit" className="px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg">Add</button>
                  </form>
                  <div className="space-y-1">
                    {resumeData.activities.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg">
                        <span className="font-medium text-slate-700">{item}</span>
                        <button onClick={() => removeActivity(idx)} className="text-[10px] text-red-500 font-bold">✕</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
    
  );
}