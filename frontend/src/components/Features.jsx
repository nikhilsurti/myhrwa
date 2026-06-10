// import React from 'react';

// const features = [
//   {
//     icon: '⚡',
//     title: 'Easy & Fast Builder',
//     desc: 'Just enter your details and our interactive builder organizes them automatically into clean layouts.'
//   },
//   {
//     icon: '🤖',
//     title: 'AI Smart Recommendations',
//     desc: 'Unsure what to write? Get custom AI generated bullet points specifically tailored to your industry.'
//   },
//   {
//     icon: '🎯',
//     title: 'ATS-Friendly Formats',
//     desc: 'Designed strictly according to parsing guidelines so that your resume clears automated tracking screening.'
//   },
//   {
//     icon: '🎨',
//     title: 'Fully Customizable',
//     desc: 'Change colors, typography, section order and design spacings with easy click-and-drop tools.'
//   }
// ];

// export default function Features() {
//   return (
//     <section id="features" className="py-20 lg:py-28 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Title */}
//         <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//             Build your professional identity with premium tools
//           </h2>
//           <p className="text-slate-500 font-medium text-lg">
//             Everything you need to land an interview. Created with insights from recruiters.
//           </p>
//         </div>

//         {/* Feature Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((item, idx) => (
//             <div key={idx} className="group relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300">
//               <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
//                 {item.icon}
//               </div>
//               <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
//               <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }



// import React from 'react';

// const features = [
//   {
//     icon: '⚡',
//     title: 'Easy & Fast Builder',
//     desc: 'Just enter your details and our interactive builder organizes them automatically into clean layouts.'
//   },
//   {
//     icon: '🤖',
//     title: 'AI Smart Recommendations',
//     desc: 'Unsure what to write? Get custom AI generated bullet points specifically tailored to your industry.'
//   },
//   {
//     icon: '🎯',
//     title: 'ATS-Friendly Formats',
//     desc: 'Designed strictly according to parsing guidelines so that your resume clears automated tracking screening.'
//   },
//   {
//     icon: '🎨',
//     title: 'Fully Customizable',
//     desc: 'Change colors, typography, section order and design spacings with easy click-and-drop tools.'
//   }
// ];

// export default function Features() {
//   return (
//     <section id="features" className="py-20 lg:py-28 bg-slate-50 font-['Plus_Jakarta_Sans'] border-t border-slate-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//             Build your professional identity with premium tools
//           </h2>
//           <p className="text-slate-500 text-sm font-semibold leading-relaxed">
//             Everything you need to land an interview. Created with insights from recruiters.
//           </p>
//         </div>

//         {/* Feature Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((item, idx) => (
//             <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all duration-300">
//               <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform shadow-sm">
//                 {item.icon}
//               </div>
//               <h3 className="text-base font-extrabold text-slate-900 mb-2">{item.title}</h3>
//               <p className="text-xs text-slate-500 leading-relaxed font-semibold">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


import React from 'react';

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white font-['Plus_Jakarta_Sans'] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Way beyond a resume builder...
          </h2>
          <p className="text-slate-500 text-sm font-semibold">
            We guide you through every step of the process. Simple, quick, and powerful.
          </p>
        </div>

        {/* SaaS Design Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Card 1: Step-by-Step Guidance */}
          <div className="p-8 bg-slate-50 border border-slate-200/50 rounded-[32px] flex flex-col justify-between gap-8 hover:shadow-xl transition-all duration-300">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">AI-Powered Guidance</span>
              <h3 className="text-xl font-extrabold text-slate-900 pt-2">Step-by-step guidance</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                No need to think much. We guide you through every step of the process. We show you what to add, and where to add it. It's clear and simple.
              </p>
            </div>

            {/* Interactive Steps Visual representation */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/40 shadow-sm flex flex-col gap-2 max-w-[340px] self-center">
              <div className="flex items-center gap-2.5 text-[10px] font-bold text-slate-800">
                <span className="h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px]">✓</span>
                Step 1 • Personal Details
              </div>
              <div className="flex items-center gap-2.5 text-[10px] font-bold text-slate-800">
                <span className="h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px]">✓</span>
                Step 2 • Professional Summary
              </div>
              <div className="flex items-center gap-2.5 text-[10px] font-bold text-blue-600 bg-blue-50/50 p-2 rounded-lg">
                <span className="h-5 w-5 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center text-[8px] animate-pulse">3</span>
                Step 3 • Technical Skills
              </div>
            </div>
          </div>

          {/* Card 2: AI Writes for you */}
          <div className="p-8 bg-slate-50 border border-slate-200/50 rounded-[32px] flex flex-col justify-between gap-8 hover:shadow-xl transition-all duration-300">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">AI Writing Assistant</span>
              <h3 className="text-xl font-extrabold text-slate-900 pt-2">AI writes for you</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Stuck on descriptions? Get industry-proven sentences instantly generated according to your actual job role.
              </p>
            </div>

            {/* AI Text suggestions box representation */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/40 shadow-sm flex flex-col gap-2 max-w-[340px] self-center">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase">AI Suggestions</p>
              <div className="text-[10px] font-semibold text-slate-700 p-2 bg-blue-50/30 border border-blue-100/50 rounded-lg">
                "Experienced and result-driven manager with a <span className="text-blue-600 font-black">genuine passion for performance</span> optimization."
              </div>
              <button className="text-[9px] font-black bg-blue-600 text-white rounded-lg py-1 px-3 self-end">Use this phrase</button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}