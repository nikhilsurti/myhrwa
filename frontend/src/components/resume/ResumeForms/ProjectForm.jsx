// import React from "react";

// export default function ProjectsForm({
//   resumeData,
//   projectInput,
//   setProjectInput,
//   addProject,
//   removeProject,
// }) {
//   return (
//     <div className="space-y-6">
//       <h3 className="text-sm font-bold text-slate-900 border-l-4 border-indigo-600 pl-2">
//         Projects
//       </h3>

//       {/* Form */}
//       <form onSubmit={addProject} className="space-y-3">
//         <input
//           type="text"
//           value={projectInput.title}
//           onChange={(e) =>
//             setProjectInput({ ...projectInput, title: e.target.value })
//           }
//           placeholder="Project Title"
//           className="w-full px-3 py-2 border rounded-lg text-xs"
//         />

//         <textarea
//           value={projectInput.description}
//           onChange={(e) =>
//             setProjectInput({
//               ...projectInput,
//               description: e.target.value,
//             })
//           }
//           placeholder="Project Description"
//           className="w-full px-3 py-2 border rounded-lg text-xs"
//         />

//         <input
//           type="text"
//           value={projectInput.techStack}
//           onChange={(e) =>
//             setProjectInput({
//               ...projectInput,
//               techStack: e.target.value,
//             })
//           }
//           placeholder="Tech Stack (React, Node, Django)"
//           className="w-full px-3 py-2 border rounded-lg text-xs"
//         />

//         <div className="grid grid-cols-2 gap-2">
//           <input
//             type="date"
//             value={projectInput.startDate}
//             onChange={(e) =>
//               setProjectInput({
//                 ...projectInput,
//                 startDate: e.target.value,
//               })
//             }
//             className="px-3 py-2 border rounded-lg text-xs"
//           />

//           <input
//             type="date"
//             value={projectInput.endDate}
//             onChange={(e) =>
//               setProjectInput({
//                 ...projectInput,
//                 endDate: e.target.value,
//               })
//             }
//             className="px-3 py-2 border rounded-lg text-xs"
//           />
//         </div>

//         <input
//           type="text"
//           value={projectInput.github}
//           onChange={(e) =>
//             setProjectInput({
//               ...projectInput,
//               github: e.target.value,
//             })
//           }
//           placeholder="GitHub Link"
//           className="w-full px-3 py-2 border rounded-lg text-xs"
//         />

//         <input
//           type="text"
//           value={projectInput.live}
//           onChange={(e) =>
//             setProjectInput({
//               ...projectInput,
//               live: e.target.value,
//             })
//           }
//           placeholder="Live Demo Link"
//           className="w-full px-3 py-2 border rounded-lg text-xs"
//         />

//         <button
//           type="submit"
//           className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg"
//         >
//           + Add Project
//         </button>
//       </form>

//       {/* List */}
//       <div className="space-y-3">
//         {resumeData.projects.map((item, idx) => (
//           <div
//             key={idx}
//             className="p-3 border rounded-lg bg-slate-50 space-y-1"
//           >
//             <div className="flex justify-between">
//               <p className="text-xs font-bold text-slate-900">
//                 {item.title}
//               </p>

//               <button
//                 onClick={() => removeProject(idx)}
//                 className="text-red-500 text-[10px]"
//               >
//                 ✕
//               </button>
//             </div>

//             <p className="text-[10px] text-slate-600">
//               {item.description}
//             </p>

//             <p className="text-[10px] text-slate-500">
//               Tech: {item.techStack}
//             </p>

//             <p className="text-[10px] text-slate-400">
//               {item.startDate} → {item.endDate}
//             </p>

//             <div className="flex gap-3 text-[10px]">
//               {item.github && (
//                 <a
//                   href={item.github}
//                   target="_blank"
//                   className="text-blue-600 underline"
//                 >
//                   GitHub
//                 </a>
//               )}

//               {item.live && (
//                 <a
//                   href={item.live}
//                   target="_blank"
//                   className="text-green-600 underline"
//                 >
//                   Live Demo
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }






import React from "react";

export default function ProjectForm({
  resumeData,
  addProject,
  removeProject,
  handleProjectChange,
}) {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-slate-900 border-l-4 border-blue-600 pl-2">
          Projects
        </h3>

        <button
          onClick={addProject}
          className="text-xs font-bold text-blue-600 hover:underline"
        >
          + Add Project
        </button>
      </div>

      {/* Project List */}
      {resumeData.projects.map((project, index) => (
        <div
          key={project.id}
          className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 relative"
        >
          {/* Delete */}
          <button
            onClick={() => removeProject(project.id)}
            className="absolute top-3 right-3 text-xs text-red-500 font-bold"
          >
            Delete
          </button>

          <div className="text-[10px] font-bold text-slate-400">
            Project #{index + 1}
          </div>

          {/* Title */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase">
              Title
            </label>
            <input
              type="text"
              value={project.title}
              onChange={(e) =>
                handleProjectChange(project.id, "title", e.target.value)
              }
              className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-semibold"
              placeholder="Project Name"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase">
              Description
            </label>
            <textarea
              rows={3}
              value={project.description}
              onChange={(e) =>
                handleProjectChange(project.id, "description", e.target.value)
              }
              className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium"
              placeholder="Project details..."
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                Start Date
              </label>
              <input
                type="date"
                value={project.startDate}
                onChange={(e) =>
                  handleProjectChange(project.id, "startDate", e.target.value)
                }
                className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs"
                placeholder="2023"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                End Date
              </label>
              <input
                type="date"
                value={project.endDate}
                onChange={(e) =>
                  handleProjectChange(project.id, "endDate", e.target.value)
                }
                className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs"
                placeholder="2024 / Present"
              />
            </div>
          </div>

          {/* Link */}
          {/* <div> */}
            {/* <label className="text-[10px] font-bold text-slate-400 uppercase">
              Project Link
            </label> */}
            {/* <input
  type="url"
  value={project.link}
  onChange={(e) =>
    handleProjectChange(project.id, "link", e.target.value)
  }
  placeholder="https://example.com"
  className="w-full px-3 py-1.5 border rounded text-xs"
/> */}
            {/* <input
              type="text"
              value={project.link}
              onChange={(e) =>
                handleProjectChange(project.id, "link", e.target.value)
              }
              className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs"
              placeholder="GitHub / Live URL"
            /> */}
          {/* </div> */}
        </div>
      ))}
    </div>
  );
}