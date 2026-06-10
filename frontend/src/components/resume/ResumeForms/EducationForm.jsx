// import React from "react";

// export default function EducationForm({
//   resumeData,
//   addEducation,
//   removeEducation,
//   handleEducationChange,
// }) {
//   return (
   
//       <div className="space-y-6">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-sm font-bold text-slate-900 border-l-4 border-blue-600 pl-2">Education</h3>
//                   <button onClick={addEducation} className="text-xs font-bold text-blue-600 hover:underline">+ Add Entry</button>
//                 </div>
//                 {resumeData.educations.map((edu, index) => (
//                   <div key={edu.id} className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl space-y-4 relative">
//                     <button onClick={() => removeEducation(edu.id)} className="absolute top-4 right-4 text-xs font-bold text-red-500 hover:underline">Delete</button>
//                     <div className="text-[10px] font-black text-slate-400">Education #{index+1}</div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="space-y-1">
//                         <label className="text-[10px] font-bold text-slate-400 uppercase">School / University</label>
//                         <input type="text" value={edu.school} onChange={(e) => handleEducationChange(edu.id, 'school', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold" />
//                       </div>
//                       <div className="space-y-1">
//                         <label className="text-[10px] font-bold text-slate-400 uppercase">Degree</label>
//                         <input type="text" value={edu.degree} onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold" />
//                       </div>
//                     </div>
//                     <div className="space-y-1">
//                       <label className="text-[10px] font-bold text-slate-400 uppercase">Duration</label>
//                       <input type="text" value={edu.duration} onChange={(e) => handleEducationChange(edu.id, 'duration', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
   
//   );
// }



import React from "react";

export default function EducationForm({
  resumeData,
  addEducation,
  removeEducation,
  handleEducationChange,
}) {
  return (
    <div className="space-y-6">
      
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-slate-900 border-l-4 border-blue-600 pl-2">
          Education
        </h3>

        <button
          onClick={addEducation}
          className="text-xs font-bold text-blue-600 hover:underline"
        >
          + Add Entry
        </button>
      </div>

      {resumeData.educations.map((edu, index) => (
        <div
          key={edu.id}
          className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl space-y-4 relative"
        >
          <button
            onClick={() => removeEducation(edu.id)}
            className="absolute top-4 right-4 text-xs font-bold text-red-500 hover:underline"
          >
            Delete
          </button>

          <div className="text-[10px] font-black text-slate-400">
            Education #{index + 1}
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                School / University
              </label>
              <input
                type="text"
                value={edu.school}
                onChange={(e) =>
                  handleEducationChange(
                    edu.id,
                    "school",
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                Degree
              </label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) =>
                  handleEducationChange(
                    edu.id,
                    "degree",
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                Field Of Study
              </label>
              <input
                type="text"
                value={edu.fieldOfStudy}
                onChange={(e) =>
                  handleEducationChange(
                    edu.id,
                    "fieldOfStudy",
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                Location
              </label>
              <input
                type="text"
                value={edu.location}
                onChange={(e) =>
                  handleEducationChange(
                    edu.id,
                    "location",
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                Start Date
              </label>
              <input
                type="date"
                value={edu.startDate}
                onChange={(e) =>
                  handleEducationChange(
                    edu.id,
                    "startDate",
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                End Date
              </label>
              <input
                type="date"
                value={edu.endDate}
                onChange={(e) =>
                  handleEducationChange(
                    edu.id,
                    "endDate",
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">
              CGPA / Percentage
            </label>
            <input
              type="text"
              value={edu.cgpa}
              onChange={(e) =>
                handleEducationChange(
                  edu.id,
                  "cgpa",
                  e.target.value
                )
              }
              placeholder="e.g. 8.5 CGPA or 85%"
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold"
            />
          </div>
        </div>
      ))}
    </div>
  );
}