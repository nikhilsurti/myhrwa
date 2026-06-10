// import React, { useState } from 'react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-100 transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
//           {/* Logo
//           <div className="flex items-center gap-2">
//             <div className="h-10 w-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
//               <span className="text-white font-black text-xl">R</span>
//             </div>
//             <span className="text-xl font-extrabold tracking-tight text-slate-900">
//               Resume<span className="text-blue-600">Pro</span>
//             </span>
//           </div> */}

//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <div className="h-10 w-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
//                 {/* 'R' ki jagah 'M' */}
//              <span className="text-white font-black text-xl">M</span> 
//            </div>
//            <span className="text-xl font-extrabold tracking-tight text-slate-900">
//              MyHR<span className="text-blue-600">WA</span>
//            </span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">
//             <a href="#templates" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Templates</a>
//             <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Features</a>
//             <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
//             <a href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex items-center gap-4">
//             <button className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors">
//               Sign In
//             </button>
//             <button className="px-5 py-2.5 text-sm font-bold bg-slate-900 text-white rounded-xl hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md">
//               Create My Resume
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button 
//               onClick={() => setIsOpen(!isOpen)} 
//               className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3">
//           <a href="#templates" className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50">Templates</a>
//           <a href="#features" className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50">Features</a>
//           <a href="#faq" className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50">FAQ</a>
//           <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
//             <button className="w-full py-2.5 text-center font-semibold text-slate-700 hover:bg-slate-50 rounded-lg">Sign In</button>
//             <button className="w-full py-2.5 text-center font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Create My Resume</button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }




import React, { useState } from 'react';

export default function Navbar({ onCreateResume }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSignIn = () => {
    alert("Sign In Feature Coming Soon! For now, click 'Create My Resume' to try the Builder.");
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-100 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={onCreateResume}>
            <div className="h-10 w-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-black text-xl">M</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              MyHR<span className="text-blue-600">WA</span>
            </span>
          </div>

          {/* Desktop Menu
          <div className="hidden md:flex items-center gap-8">
            <a href="#templates" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Templates</a>
            <a href="#features" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#faq" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
            <a href="#" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
          </div> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services"className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Services
            </a>

            <a href="#faq"className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">FAQ
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* <button 
              onClick={handleSignIn}
              className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Sign In
            </button> */}
            <button 
              onClick={onCreateResume}
              className="px-6 py-3 text-xs font-extrabold bg-slate-900 text-white rounded-xl hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
            >
              Create My Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-slate-600 hover:text-slate-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3">
          {/* <a href="#templates" className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50">Templates</a>
          <a href="#features" className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50">Features</a>
          <a href="#faq" className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50">FAQ</a> */}
          <a  href="#services"className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50">
           Services
          </a>
          <a href="#faq"className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50">FAQ</a>
          
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            {/* <button onClick={handleSignIn} className="w-full py-2.5 text-center font-bold text-slate-700 hover:bg-slate-50 rounded-lg">Sign In</button> */}
            <button onClick={onCreateResume} className="w-full py-2.5 text-center font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Create My Resume</button>
          </div>
        </div>
      )}
    </nav>
  );
}