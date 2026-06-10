// import React from 'react';

// export default function TrustBadges() {
//   const logos = ['Google', 'Amazon', 'Accenture', 'Microsoft', 'KPMG', 'H&M'];
  
//   return (
//     <div className="bg-slate-50 border-y border-slate-100 py-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Our templates are proven to work at top companies</p>
//         <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16 opacity-45 grayscale hover:grayscale-0 transition-all duration-300">
//           {logos.map((logo, idx) => (
//             <span key={idx} className="text-xl md:text-2xl font-black text-slate-600 tracking-tight">
//               {logo}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';

// export default function TrustBadges() {
//   return (
//     <div className="bg-slate-50 border-y border-slate-100 py-10 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
//           Our templates are proven to work at top companies
//         </p>
//         <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
          
//           {/* Google SVG */}
//           <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 5.92 1 1 5.92 1 12s4.92 11 11.24 11c6.59 0 10.97-4.63 10.97-11.16 0-.75-.08-1.32-.2-1.855H12.24z"/>
//           </svg>

//           {/* Amazon SVG */}
//           <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M15.22 13.91c-1.33.82-3.15 1.25-4.48 1.25-1.92 0-2.82-.9-2.82-2.36 0-2.32 1.92-3.21 5.25-3.21v.46c0 .9-.35 2.51-1.33 3.32s1.42 1.05 2.5.4c.54-.32 1.08-.75 1.48-1.18v1.36c-.4.43-1.08.75-1.6 1zM22.1 16.5c-.32.43-1.01.65-1.42.32s-.36-1.01-.06-1.48c1.3-1.89 1.98-4.22 1.98-6.49 0-3.32-1.74-5.32-4.54-5.32-2.5 0-4.69 1.57-5.4 3.73-.24.71-.05 1.45.45 1.92.51.48 1.34.42 1.77-.12.43-.54.91-1.29 1.63-1.29.74 0 1.11.45 1.11 1.42v1.02c-1.12.1-2.5.21-3.61.43-3.05.59-4.8 2.06-4.8 4.67 0 2.59 1.66 4.11 4.22 4.11 2.05 0 3.77-.96 4.54-2.34l.2.32c.6.93 1.64 1.45 2.76 1.45 1.4 0 2.45-.75 3.12-1.92V16.5c-.53.53-1.07.53-1.5 0z"/>
//           </svg>

//           {/* Microsoft SVG */}
//           <svg className="h-5 w-auto" viewBox="0 0 23 23" fill="currentColor">
//             <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z"/>
//           </svg>

//           {/* Accenture SVG */}
//           <span className="font-extrabold text-lg tracking-tighter text-slate-700">accenture</span>

//           {/* KPMG SVG */}
//           <span className="font-black text-xl italic tracking-tight text-blue-900">KPMG</span>

//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react';

export default function TrustBadges() {
  const logos = [
    { name: 'Google', path: 'M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 5.92 1 1 5.92 1 12s4.92 11 11.24 11c6.59 0 10.97-4.63 10.97-11.16 0-.75-.08-1.32-.2-1.855H12.24z' },
    { name: 'Microsoft', path: 'M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z' },
    { name: 'Amazon', path: 'M15.22 13.91c-1.33.82-3.15 1.25-4.48 1.25-1.92 0-2.82-.9-2.82-2.36 0-2.32 1.92-3.21 5.25-3.21v.46c0 .9-.35 2.51-1.33 3.32s1.42 1.05 2.5.4c.54-.32 1.08-.75 1.48-1.18v1.36c-.4.43-1.08.75-1.6 1zM22.1 16.5c-.32.43-1.01.65-1.42.32s-.36-1.01-.06-1.48c1.3-1.89 1.98-4.22 1.98-6.49 0-3.32-1.74-5.32-4.54-5.32-2.5 0-4.69 1.57-5.4 3.73-.24.71-.05 1.45.45 1.92.51.48 1.34.42 1.77-.12.43-.54.91-1.29 1.63-1.29.74 0 1.11.45 1.11 1.42v1.02c-1.12.1-2.5.21-3.61.43-3.05.59-4.8 2.06-4.8 4.67 0 2.59 1.66 4.11 4.22 4.11 2.05 0 3.77-.96 4.54-2.34l.2.32c.6.93 1.64 1.45 2.76 1.45 1.4 0 2.45-.75 3.12-1.92V16.5c-.53.53-1.07.53-1.5 0z' }
  ];

  return (
    <div className="bg-slate-50 border-y border-slate-100 py-10 overflow-hidden relative">
      {/* Dynamic Keyframes injected safely */}
      <style>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: infiniteScroll 25s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 font-['Plus_Jakarta_Sans']">
          Our templates are proven to work at top companies
        </p>

        {/* Scrolling Marquee Container */}
        <div className="overflow-hidden w-full flex relative">
          <div className="animate-scroll gap-16 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Array double kiya hai continuous loop banaye rakhne ke liye */}
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
                  <path d={logo.path} />
                </svg>
                <span className="font-extrabold text-slate-700 text-sm tracking-tight">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}