// import React from "react";

// export default function ResumeBuilderShowcase({ onCreateResume }) {
//   return (
//     <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
//             Resume Builder
//           </span>

//           <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
//             Build ATS-Friendly Resumes That Get Interviews
//           </h2>

//           <p className="mt-5 text-slate-600 text-lg">
//             Create professional resumes in minutes with our intelligent
//             resume builder designed to pass ATS screening systems.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left Resume Preview */}
//           <div className="relative">

//             <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6">

//               {/* Header */}
//               <div className="flex items-center gap-4 pb-5 border-b">

//                 <div className="w-14 h-14 rounded-full bg-slate-200"></div>

//                 <div>
//                   <h3 className="font-bold text-slate-900">
//                     Sarah Johnson
//                   </h3>

//                   <p className="text-sm text-blue-600 font-semibold">
//                     Senior HR Executive
//                   </p>
//                 </div>

//               </div>

//               {/* Content */}
//               <div className="space-y-5 mt-5">

//                 <div>
//                   <div className="h-3 bg-blue-600 rounded w-24 mb-3"></div>

//                   <div className="space-y-2">
//                     <div className="h-2 bg-slate-200 rounded"></div>
//                     <div className="h-2 bg-slate-200 rounded"></div>
//                     <div className="h-2 bg-slate-200 rounded w-4/5"></div>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="h-3 bg-blue-600 rounded w-32 mb-3"></div>

//                   <div className="space-y-2">
//                     <div className="h-2 bg-slate-200 rounded"></div>
//                     <div className="h-2 bg-slate-200 rounded"></div>
//                     <div className="h-2 bg-slate-200 rounded w-3/4"></div>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="h-3 bg-blue-600 rounded w-20 mb-3"></div>

//                   <div className="flex flex-wrap gap-2">
//                     <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold">
//                       Recruitment
//                     </span>

//                     <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold">
//                       HRMS
//                     </span>

//                     <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold">
//                       Payroll
//                     </span>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* ATS Badge */}
//             <div className="absolute -top-5 -right-5 bg-green-500 text-white px-5 py-3 rounded-2xl shadow-lg">
//               <p className="text-xs font-bold">ATS SCORE</p>
//               <h3 className="text-2xl font-extrabold">96%</h3>
//             </div>

//           </div>

//           {/* Right Content */}
//           <div>

//             <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
//               Everything You Need To Create The Perfect Resume
//             </h3>

//             <div className="mt-8 space-y-6">

//               <div className="flex gap-4">
//                 <div className="text-2xl">⚡</div>
//                 <div>
//                   <h4 className="font-bold text-slate-900">
//                     ATS Optimized
//                   </h4>
//                   <p className="text-slate-600">
//                     Designed to pass applicant tracking systems used by recruiters.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="text-2xl">🤖</div>
//                 <div>
//                   <h4 className="font-bold text-slate-900">
//                     AI Suggestions
//                   </h4>
//                   <p className="text-slate-600">
//                     Get smart recommendations for summaries and job descriptions.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="text-2xl">📄</div>
//                 <div>
//                   <h4 className="font-bold text-slate-900">
//                     Professional Templates
//                   </h4>
//                   <p className="text-slate-600">
//                     Modern recruiter-approved templates for every industry.
//                   </p>
//                 </div>
//               </div>

//             </div>

//             {/* <button className="mt-10 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all">
//               Build My Resume
//             </button> */}

//            <button onClick={onCreateResume}className="mt-10 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all">  Build My Resume
//          </button> 
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";

// export default function ResumeBuilderShowcase({ onCreateResume }) {
//   return (
//     <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
//             Resume Builder
//           </span>

//           <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
//             Build ATS-Friendly Resumes That Get Interviews
//           </h2>

//           <p className="mt-5 text-slate-600 text-lg">
//             Create professional resumes in minutes with AI-powered suggestions
//             and recruiter-approved templates.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT - REAL RESUME PREVIEW */}
//           <div className="relative">

//             <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-8">

//               {/* Header */}
//               <div className="flex items-center gap-4 pb-6 border-b">

//                 <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xl">
//                   SJ
//                 </div>

//                 <div>
//                   <h3 className="font-bold text-slate-900 text-xl">
//                     Sarah Johnson
//                   </h3>

//                   <p className="text-sm text-blue-600 font-semibold">
//                     Senior HR Executive
//                   </p>

//                   <p className="text-xs text-slate-500">
//                     Mumbai, India • sarah.johnson@email.com
//                   </p>
//                 </div>
//               </div>

//               {/* Summary */}
//               <div className="mt-6">
//                 <h4 className="text-sm font-bold text-slate-700 mb-2">
//                   PROFESSIONAL SUMMARY
//                 </h4>

//                 <p className="text-sm text-slate-600 leading-relaxed">
//                   Experienced HR professional with 7+ years in talent acquisition,
//                   recruitment strategy, and workforce management. Skilled in
//                   building high-performing teams and optimizing hiring pipelines
//                   for fast-growing organizations.
//                 </p>
//               </div>

//               {/* Experience */}
//               <div className="mt-6">
//                 <h4 className="text-sm font-bold text-slate-700 mb-2">
//                   EXPERIENCE
//                 </h4>

//                 <div className="text-sm text-slate-600 space-y-2">
//                   <p className="font-semibold text-slate-800">
//                     Senior HR Executive — Infosys
//                   </p>
//                   <p>2021 - Present</p>
//                   <p>
//                     Managed end-to-end recruitment for 200+ candidates and improved
//                     hiring efficiency by 35%.
//                   </p>
//                 </div>
//               </div>

//               {/* Skills */}
//               <div className="mt-6">
//                 <h4 className="text-sm font-bold text-slate-700 mb-2">
//                   SKILLS
//                 </h4>

//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "Recruitment",
//                     "HR Strategy",
//                     "Talent Acquisition",
//                     "Payroll",
//                     "HRMS",
//                     "Interviewing",
//                   ].map((skill, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* ATS SCORE */}
//             <div className="absolute -top-5 -right-5 bg-green-500 text-white px-5 py-3 rounded-2xl shadow-lg">
//               <p className="text-xs font-bold">ATS SCORE</p>
//               <h3 className="text-2xl font-extrabold">96%</h3>
//             </div>

//           </div>

//           {/* RIGHT SIDE */}
//           <div>

//             <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
//               Everything You Need To Create The Perfect Resume
//             </h3>

//             <div className="mt-8 space-y-6">

//               <div className="flex gap-4">
//                 <div className="text-2xl">⚡</div>
//                 <div>
//                   <h4 className="font-bold text-slate-900">ATS Optimized</h4>
//                   <p className="text-slate-600">
//                     Designed to pass applicant tracking systems used by recruiters.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="text-2xl">🤖</div>
//                 <div>
//                   <h4 className="font-bold text-slate-900">AI Suggestions</h4>
//                   <p className="text-slate-600">
//                     Smart content suggestions for summaries and job descriptions.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="text-2xl">📄</div>
//                 <div>
//                   <h4 className="font-bold text-slate-900">Professional Templates</h4>
//                   <p className="text-slate-600">
//                     Recruiter-approved templates for every industry.
//                   </p>
//                 </div>
//               </div>

//             </div>

//             <button
//               onClick={onCreateResume}
//               className="mt-10 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all"
//             >
//               Build My Resume
//             </button>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";

// export default function ResumeA4Preview() {
//   return (
//     <div className="w-full flex justify-center bg-slate-100 py-10">

//       {/* A4 PAGE */}
//       <div
//         className="bg-white shadow-2xl"
//         style={{
//           width: "210mm",
//           minHeight: "297mm",
//         }}
//       >

//         <div className="p-10">

//           {/* HEADER */}
//           <div className="flex gap-6 items-center border-b pb-6">

//             <img
//               src="https://i.pravatar.cc/200?img=12"
//               alt="profile"
//               className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
//             />

//             <div>
//               <h1 className="text-2xl font-bold text-slate-900">
//                 Sarah Johnson
//               </h1>

//               <p className="text-blue-600 font-semibold">
//                 Senior HR Executive
//               </p>

//               <p className="text-sm text-slate-500">
//                 Mumbai, India
//               </p>

//               {/* CONTACT LINKS */}
//               <div className="text-xs text-slate-600 mt-1 space-y-1">

//                 <p>📧 sarah@email.com</p>
//                 <p>📱 +91 98765 43210</p>

//                 {/* LINKEDIN */}
//                 <p>
//                   🔗 LinkedIn:{" "}
//                   <span className="text-blue-600">
//                     linkedin.com/in/sarahjohnson
//                   </span>
//                 </p>

//                 {/* GITHUB (optional for tech roles) */}
//                 <p>
//                   💻 GitHub:{" "}
//                   <span className="text-blue-600">
//                     github.com/sarahjohnson
//                   </span>
//                 </p>

//               </div>
//             </div>
//           </div>

//           {/* BODY */}
//           <div className="grid grid-cols-3 gap-8 mt-8">

//             {/* LEFT SIDE */}
//             <div className="col-span-2 space-y-6">

//               {/* SUMMARY */}
//               <div>
//                 <h2 className="text-sm font-bold text-slate-700 mb-2">
//                   PROFESSIONAL SUMMARY
//                 </h2>

//                 <p className="text-sm text-slate-600 leading-relaxed">
//                   Results-driven HR professional with 7+ years of experience in
//                   recruitment, talent acquisition, and workforce management.
//                   Proven track record of hiring 500+ candidates across IT,
//                   fintech, and product-based companies while improving hiring
//                   efficiency by 40%.
//                 </p>
//               </div>

//               {/* EXPERIENCE */}
//               <div>
//                 <h2 className="text-sm font-bold text-slate-700 mb-2">
//                   EXPERIENCE
//                 </h2>

//                 <div className="space-y-4 text-sm">

//                   <div>
//                     <p className="font-semibold">
//                       Senior HR Executive — Infosys
//                     </p>
//                     <p className="text-xs text-slate-500">
//                       2021 - Present
//                     </p>
//                     <ul className="list-disc ml-5 text-slate-600 mt-1 space-y-1">
//                       <li>Handled 200+ end-to-end recruitment cycles</li>
//                       <li>Improved hiring speed by 35%</li>
//                       <li>Built internal HR pipeline system</li>
//                     </ul>
//                   </div>

//                   <div>
//                     <p className="font-semibold">
//                       HR Executive — TCS
//                     </p>
//                     <p className="text-xs text-slate-500">
//                       2018 - 2021
//                     </p>
//                     <ul className="list-disc ml-5 text-slate-600 mt-1 space-y-1">
//                       <li>Managed onboarding for 1000+ employees</li>
//                       <li>Conducted interview scheduling system</li>
//                       <li>HRMS data management</li>
//                     </ul>
//                   </div>

//                 </div>
//               </div>

//               {/* ACHIEVEMENTS */}
//               <div>
//                 <h2 className="text-sm font-bold text-slate-700 mb-2">
//                   ACHIEVEMENTS
//                 </h2>

//                 <ul className="list-disc ml-5 text-sm text-slate-600 space-y-1">
//                   <li>Employee of the Year — Infosys (2023)</li>
//                   <li>Reduced hiring cost by 25%</li>
//                   <li>Successfully hired 500+ candidates</li>
//                 </ul>
//               </div>

//               {/* EDUCATION */}
//               <div>
//                 <h2 className="text-sm font-bold text-slate-700 mb-2">
//                   EDUCATION
//                 </h2>

//                 <p className="text-sm text-slate-600">
//                   MBA in Human Resources — University of Mumbai (2018)
//                 </p>
//               </div>

//             </div>

//             {/* RIGHT SIDE */}
//             <div className="space-y-6">

//               {/* SKILLS */}
//               <div>
//                 <h2 className="text-sm font-bold text-slate-700 mb-2">
//                   SKILLS
//                 </h2>

//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "Recruitment",
//                     "HRMS",
//                     "Payroll",
//                     "Interviewing",
//                     "Talent Acquisition",
//                     "Leadership",
//                   ].map((skill, i) => (
//                     <span
//                       key={i}
//                       className="px-2 py-1 bg-slate-100 text-xs rounded"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* CERTIFICATIONS */}
//               <div>
//                 <h2 className="text-sm font-bold text-slate-700 mb-2">
//                   CERTIFICATIONS
//                 </h2>

//                 <ul className="text-xs text-slate-600 space-y-1">
//                   <li>📜 HR Analytics — Coursera</li>
//                   <li>📜 Talent Acquisition — LinkedIn Learning</li>
//                   <li>📜 Advanced HR Management</li>
//                 </ul>
//               </div>

//               {/* CONTACT */}
//               <div>
//                 <h2 className="text-sm font-bold text-slate-700 mb-2">
//                   CONTACT
//                 </h2>

//                 <p className="text-xs text-slate-600">📧 sarah@email.com</p>
//                 <p className="text-xs text-slate-600">📱 +91 98765 43210</p>
//                 <p className="text-xs text-slate-600">📍 Mumbai, India</p>
//               </div>

//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }



// import React from "react";

// export default function ResumeBuilderShowcase({ onCreateResume }) {
//   return (
//     <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* HEADING */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
//             Resume Builder
//           </span>

//           <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
//             Build ATS-Friendly Resumes That Get Interviews
//           </h2>

//           <p className="mt-5 text-slate-600 text-lg">
//             Create professional resumes in minutes with recruiter-approved ATS templates.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT - REAL RESUME PREVIEW */}
//           <div className="relative">

//             <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl p-8">

//               {/* HEADER */}
//               <div className="flex items-center gap-4 pb-5 border-b">

//                 <img
//                   src="https://i.pravatar.cc/120?img=12"
//                   alt="profile"
//                   className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
//                 />

//                 <div>
//                   <h3 className="font-bold text-slate-900 text-lg">
//                     Sarah Johnson
//                   </h3>

//                   <p className="text-sm text-blue-600 font-semibold">
//                     Senior HR Executive
//                   </p>

//                   <p className="text-xs text-slate-500">
//                     Mumbai, India • sarah.johnson@email.com
//                   </p>
//                 </div>

//               </div>

//               {/* SUMMARY */}
//               <div className="mt-5">
//                 <h4 className="text-xs font-bold text-slate-700 mb-2">
//                   SUMMARY
//                 </h4>

//                 <p className="text-xs text-slate-600 leading-relaxed">
//                   Experienced HR professional with 7+ years in recruitment,
//                   talent acquisition, and workforce management. Successfully
//                   hired 500+ candidates across IT and product-based companies.
//                 </p>
//               </div>

//               {/* EXPERIENCE */}
//               <div className="mt-5">
//                 <h4 className="text-xs font-bold text-slate-700 mb-2">
//                   EXPERIENCE
//                 </h4>

//                 <div className="space-y-2 text-xs text-slate-600">

//                   <div>
//                     <p className="font-semibold text-slate-800">
//                       Infosys — Senior HR Executive
//                     </p>
//                     <p>2021 - Present</p>
//                   </div>

//                   <div>
//                     <p className="font-semibold text-slate-800">
//                       TCS — HR Executive
//                     </p>
//                     <p>2018 - 2021</p>
//                   </div>

//                 </div>
//               </div>

//               {/* SKILLS */}
//               <div className="mt-5">
//                 <h4 className="text-xs font-bold text-slate-700 mb-2">
//                   SKILLS
//                 </h4>

//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "Recruitment",
//                     "HRMS",
//                     "Payroll",
//                     "Interviewing",
//                     "Talent Acquisition",
//                   ].map((skill, i) => (
//                     <span
//                       key={i}
//                       className="px-2 py-1 bg-slate-100 rounded-full text-[10px] font-semibold text-slate-700"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* ACHIEVEMENTS */}
//               <div className="mt-5">
//                 <h4 className="text-xs font-bold text-slate-700 mb-2">
//                   ACHIEVEMENTS
//                 </h4>

//                 <ul className="list-disc ml-4 text-[11px] text-slate-600 space-y-1">
//                   <li>Hired 500+ candidates successfully</li>
//                   <li>Improved hiring speed by 35%</li>
//                   <li>Employee of the Year (Infosys)</li>
//                 </ul>
//               </div>

//               {/* CERTIFICATIONS */}
//               <div className="mt-5">
//                 <h4 className="text-xs font-bold text-slate-700 mb-2">
//                   CERTIFICATIONS
//                 </h4>

//                 <ul className="text-[11px] text-slate-600 space-y-1">
//                   <li>HR Analytics — Coursera</li>
//                   <li>Talent Acquisition — LinkedIn Learning</li>
//                 </ul>
//               </div>

//               {/* CONTACT */}
//               <div className="mt-5 text-[11px] text-slate-600">
//                 📧 sarah@email.com <br />
//                 📱 +91 98765 43210 <br />
//                 🔗 linkedin.com/in/sarahjohnson
//               </div>

//             </div>

//             {/* ATS SCORE */}
//             <div className="absolute -top-5 -right-5 bg-green-500 text-white px-5 py-3 rounded-2xl shadow-lg">
//               <p className="text-xs font-bold">ATS SCORE</p>
//               <h3 className="text-2xl font-extrabold">92%</h3>
//             </div>

//           </div>

//           {/* RIGHT SIDE (same as your original) */}
//           <div>

//             <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
//               Everything You Need To Create The Perfect Resume
//             </h3>

//             <div className="mt-8 space-y-6">

//               <div className="flex gap-4">
//                 <div className="text-2xl">⚡</div>
//                 <div>
//                   <h4 className="font-bold text-slate-900">ATS Optimized</h4>
//                   <p className="text-slate-600">
//                     Built to pass applicant tracking systems used by recruiters.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="text-2xl">🤖</div>
//                 <div>
//                   <h4 className="font-bold text-slate-900">AI Suggestions</h4>
//                   <p className="text-slate-600">
//                     Smart recommendations for better resumes.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="text-2xl">📄</div>
//                 <div>
//                   <h4 className="font-bold text-slate-900">Professional Templates</h4>
//                   <p className="text-slate-600">
//                     Recruiter-approved modern resume designs.
//                   </p>
//                 </div>
//               </div>

//             </div>

//             <button
//               onClick={onCreateResume}
//               className="mt-10 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all"
//             >
//               Build My Resume
//             </button>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




import React from "react";

export default function ResumeBuilderShowcase({ onCreateResume }) {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Resume Builder
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
            Build ATS-Friendly Resumes That Get Interviews
          </h2>

          <p className="mt-5 text-slate-600 text-lg">
            Create professional resumes in minutes with recruiter-approved ATS templates.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - RESUME PREVIEW */}
          <div className="relative">

            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-8">

              {/* HEADER */}
              <div className="flex items-center gap-4 pb-5 border-b">

                <img
                  src="https://i.pravatar.cc/120?img=12"
                  alt="profile"
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                />

                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    Sarah Johnson
                  </h3>

                  <p className="text-sm text-blue-600 font-semibold">
                    Senior HR Executive
                  </p>

                  <p className="text-xs text-slate-500">
                    Mumbai, India • sarah.johnson@email.com
                  </p>
                </div>

              </div>

              {/* SUMMARY */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-700 mb-2">
                  SUMMARY
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Experienced HR professional with 7+ years in recruitment,
                  talent acquisition, and workforce management. Successfully
                  hired 500+ candidates across IT and product companies.
                </p>
              </div>

              {/* EXPERIENCE */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-700 mb-2">
                  EXPERIENCE
                </h4>

                <div className="space-y-2 text-xs text-slate-600">

                  <div>
                    <p className="font-semibold text-slate-800">
                      Infosys — Senior HR Executive
                    </p>
                    <p>2021 - Present</p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-800">
                      TCS — HR Executive
                    </p>
                    <p>2018 - 2021</p>
                  </div>

                </div>
              </div>

              {/* SKILLS */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-700 mb-2">
                  SKILLS
                </h4>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Recruitment",
                    "HRMS",
                    "Payroll",
                    "Interviewing",
                    "Talent Acquisition",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-100 rounded-full text-[10px] font-semibold text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACHIEVEMENTS */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-700 mb-2">
                  ACHIEVEMENTS
                </h4>

                <ul className="list-disc ml-4 text-[11px] text-slate-600 space-y-1">
                  <li>Hired 500+ candidates successfully</li>
                  <li>Improved hiring speed by 35%</li>
                  <li>Employee of the Year — Infosys</li>
                </ul>
              </div>

              {/* CERTIFICATIONS */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-700 mb-2">
                  CERTIFICATIONS
                </h4>

                <ul className="text-[11px] text-slate-600 space-y-1">
                  <li>HR Analytics — Coursera</li>
                  <li>Talent Acquisition — LinkedIn Learning</li>
                </ul>
              </div>

            </div>

            {/* ATS BADGE */}
            <div className="absolute -top-5 -right-5 bg-green-500 text-white px-5 py-3 rounded-2xl shadow-lg">
              <p className="text-xs font-bold">ATS SCORE</p>
              <h3 className="text-2xl font-extrabold">92%</h3>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Everything You Need To Create The Perfect Resume
            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="font-bold text-slate-900">ATS Optimized</h4>
                  <p className="text-slate-600">
                    Built to pass applicant tracking systems used by recruiters.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🤖</div>
                <div>
                  <h4 className="font-bold text-slate-900">AI Suggestions</h4>
                  <p className="text-slate-600">
                    Smart resume improvement suggestions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">📄</div>
                <div>
                  <h4 className="font-bold text-slate-900">Professional Templates</h4>
                  <p className="text-slate-600">
                    Recruiter-approved modern designs.
                  </p>
                </div>
              </div>

            </div>

            <button
              onClick={onCreateResume}
              className="mt-10 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all"
            >
              Build My Resume
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}