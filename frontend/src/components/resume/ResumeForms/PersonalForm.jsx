// import React from "react";

// export default function PersonalForm({
//   resumeData,
//   handlePersonalChange,
// }) {
//   return (
    
//        <div className="space-y-4">
//                 <h3 className="text-sm font-bold text-slate-900 border-l-4 border-blue-600 pl-2">Personal Details</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="space-y-1">
//                     <label className="text-[10px] font-bold text-slate-400 uppercase">Full Name</label>
//                     <input type="text" name="fullName" value={resumeData.personal.fullName} onChange={handlePersonalChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold" />
//                   </div>
//                   <div className="space-y-1">
//                     <label className="text-[10px] font-bold text-slate-400 uppercase">Title</label>
//                     <input type="text" name="title" value={resumeData.personal.title} onChange={handlePersonalChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold" />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="space-y-1">
//                     <label className="text-[10px] font-bold text-slate-400 uppercase">Email</label>
//                     <input type="email" name="email" value={resumeData.personal.email} onChange={handlePersonalChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold" />
//                   </div>
//                   <div className="space-y-1">
//                     <label className="text-[10px] font-bold text-slate-400 uppercase">Phone</label>
//                     <input type="text" name="phone" value={resumeData.personal.phone} onChange={handlePersonalChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold" />
//                   </div>
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-[10px] font-bold text-slate-400 uppercase">Location</label>
//                   <input type="text" name="location" value={resumeData.personal.location} onChange={handlePersonalChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold" />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-[10px] font-bold text-slate-400 uppercase">Profile Summary</label>
//                   <textarea name="summary" rows={5} value={resumeData.personal.summary} onChange={handlePersonalChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium leading-relaxed" />
//                 </div>
//     </div>
//   );
// }





import React from "react";

export default function PersonalForm({
  resumeData,
  handlePersonalChange,
  generateAISummary,
  useAISuggestion,
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-slate-900 border-l-4 border-blue-600 pl-2">
        Personal Details
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-slate-400 uppercase">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={resumeData.personal.fullName}
            onChange={handlePersonalChange}
            className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-slate-400 uppercase">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={resumeData.personal.title}
            onChange={handlePersonalChange}
            className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-slate-400 uppercase">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={resumeData.personal.email}
            onChange={handlePersonalChange}
            className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-slate-400 uppercase">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={resumeData.personal.phone}
            onChange={handlePersonalChange}
            className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-bold text-slate-400 uppercase">
          Location
        </label>
        <input
          type="text"
          name="location"
          value={resumeData.personal.location}
          onChange={handlePersonalChange}
          className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold"
        />
      </div>

      {/* Summary */}
      <div className="space-y-1">
        <label className="text-[10px] font-bold text-slate-400 uppercase">
          Profile Summary
        </label>

        <textarea
          name="summary"
          rows={5}
          value={resumeData.personal.summary}
          onChange={handlePersonalChange}
          className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium leading-relaxed"
        />

        {/* Buttons */}
        {/* <div className="space-y-3 mt-3">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={generateAISummary}
              className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700"
            >
              ✨ Generate AI Suggestion
            </button>

            {resumeData.personal.aiSummarySuggestion && (
              <button
                type="button"
                onClick={useAISuggestion}
                className="px-4 py-2 bg-green-600 text-white text-xs font-bold rounded-xl hover:bg-green-700"
              >
                Use Suggestion
              </button>
            )}
          </div>

          {resumeData.personal.aiSummarySuggestion && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <h4 className="text-xs font-bold text-blue-700 mb-2">
                AI Suggestion
              </h4>

              <p className="text-xs text-slate-700 leading-relaxed">
                {resumeData.personal.aiSummarySuggestion}
              </p>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}