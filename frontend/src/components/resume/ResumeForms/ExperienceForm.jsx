// import React from "react";

// export default function ExperienceForm({
//   resumeData,
//   addExperience,
//   removeExperience,
//   handleExperienceChange,
// }) {
//   return (
   
//       <div className="space-y-6">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-sm font-bold text-slate-900 border-l-4 border-blue-600 pl-2">Experience</h3>
//                   <button onClick={addExperience} className="text-xs font-bold text-blue-600 hover:underline">+ Add Entry</button>
//                 </div>
//                 {resumeData.experiences.map((exp, index) => (
//                   <div key={exp.id} className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl space-y-4 relative">
//                     <button onClick={() => removeExperience(exp.id)} className="absolute top-4 right-4 text-xs font-bold text-red-500 hover:underline">Delete</button>
//                     <div className="text-[10px] font-black text-slate-400">Position #{index+1}</div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="space-y-1">
//                         <label className="text-[10px] font-bold text-slate-400 uppercase">Company</label>
//                         <input type="text" value={exp.company} onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold" />
//                       </div>
//                       <div className="space-y-1">
//                         <label className="text-[10px] font-bold text-slate-400 uppercase">Role</label>
//                         <input type="text" value={exp.role} onChange={(e) => handleExperienceChange(exp.id, 'role', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold" />
//                       </div>
//                     </div>
//                     <div className="space-y-1">
//                       <label className="text-[10px] font-bold text-slate-400 uppercase">Duration</label>
//                       <input type="text" value={exp.duration} onChange={(e) => handleExperienceChange(exp.id, 'duration', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold" />
//                     </div>
//                     <div className="space-y-1">
//                       <label className="text-[10px] font-bold text-slate-400 uppercase">Responsibilities (One bullet per line)</label>
//                       <textarea rows={4} value={exp.desc} onChange={(e) => handleExperienceChange(exp.id, 'desc', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
    
//   );
// }



import React from "react";

export default function ExperienceForm({
  resumeData,
  addExperience,
  removeExperience,
  handleExperienceChange,
}) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-slate-900 border-l-4 border-blue-600 pl-2">
          Experience
        </h3>

        <button
          onClick={addExperience}
          className="text-xs font-bold text-blue-600 hover:underline"
        >
          + Add Entry
        </button>
      </div>

      {resumeData.experiences.map((exp, index) => (
        <div
          key={exp.id}
          className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4 relative"
        >
          <button
            onClick={() => removeExperience(exp.id)}
            className="absolute top-4 right-4 text-xs font-bold text-red-500 hover:underline"
          >
            Delete
          </button>

          <div className="text-[10px] font-black text-slate-400 uppercase">
            Position #{index + 1}
          </div>

          {/* Company + Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                Company Name
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) =>
                  handleExperienceChange(
                    exp.id,
                    "company",
                    e.target.value
                  )
                }
                placeholder="Google"
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                Job Title
              </label>
              <input
                type="text"
                value={exp.role}
                onChange={(e) =>
                  handleExperienceChange(exp.id, "role", e.target.value)
                }
                placeholder="Frontend Developer"
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium"
              />
            </div>
          </div>

          {/* Location + Employment Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                Location
              </label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) =>
                  handleExperienceChange(
                    exp.id,
                    "location",
                    e.target.value
                  )
                }
                placeholder="Mumbai, India"
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                Employment Type
              </label>

              <select
                value={exp.employmentType}
                onChange={(e) =>
                  handleExperienceChange(
                    exp.id,
                    "employmentType",
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium"
              >
                <option value="">Select Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>
          </div>

          {/* Start Date + End Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                Start Date
              </label>
              <input
                type="date"
                value={exp.startDate}
                onChange={(e) =>
                  handleExperienceChange(
                    exp.id,
                    "startDate",
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                End Date
              </label>
              <input
                type="date"
                value={exp.endDate}
                disabled={exp.currentCompany}
                onChange={(e) =>
                  handleExperienceChange(
                    exp.id,
                    "endDate",
                    e.target.value
                  )
                }
                className={`w-full px-3 py-2 border rounded-lg text-xs font-medium ${
                  exp.currentCompany
                    ? "bg-slate-100 border-slate-100 cursor-not-allowed"
                    : "bg-white border-slate-200"
                }`}
              />
            </div>
          </div>

          {/* Current Company */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={exp.currentCompany}
              onChange={(e) =>
                handleExperienceChange(
                  exp.id,
                  "currentCompany",
                  e.target.checked
                )
              }
              className="h-4 w-4 accent-blue-600"
            />

            <label className="text-xs font-semibold text-slate-600">
              I currently work here
            </label>
          </div>

          {/* Responsibilities */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">
              Responsibilities (One Bullet Per Line)
            </label>

            <textarea
              rows={5}
              value={exp.desc}
              onChange={(e) =>
                handleExperienceChange(exp.id, "desc", e.target.value)
              }
              placeholder="Developed responsive web applications&#10;Optimized performance by 40%&#10;Worked with cross-functional teams"
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium"
            />
          </div>
        </div>
      ))}
    </div>
  );
}