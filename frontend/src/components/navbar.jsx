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




// import React, { useState } from 'react';
// import logoHR08 from "../assets/company-logos/LOGO HR-08.png";
// import API from "../api/api";

// import { signInWithPopup } from "firebase/auth";

// import {
//   auth,
//   provider,
// } from "../firebase";


// export default function Navbar({ onCreateResume }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSignIn = async () => {
//   try {

//     const result = await signInWithPopup(
//       auth,
//       provider
//     );

//     const res = await API.post(
//       "/accounts/google-login/",
//       {
//         email: result.user.email,
//         name: result.user.displayName,
//       }
//     );

//     localStorage.setItem(
//       "token",
//       res.data.access
//     );

//     localStorage.setItem(
//       "refresh",
//       res.data.refresh
//     );

//     alert("Login Successful");

//   } catch (error) {

//     console.error(error);

//     alert("Google Login Failed");

//   }
// };
//   // const handleSignIn = () => {
//   //   alert("Sign In Feature Coming Soon! For now, click 'Create My Resume' to try the Builder.");
//   // };

//   return (
//     <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-100 font-['Plus_Jakarta_Sans']">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
          
//           <div
//   className="flex items-center cursor-pointer"
//   onClick={onCreateResume}
// >
//   <img
//     src={logoHR08}
//     alt="MyHRWA Logo"
//     className="h-16 w-auto object-contain"
//   />
// </div>
//           {/* Logo
//           <div className="flex items-center gap-2 cursor-pointer" onClick={onCreateResume}>
//             <div className="h-10 w-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
//               <span className="text-white font-black text-xl">M</span>
//             </div>
//             <span className="text-xl font-extrabold tracking-tight text-slate-900">
//               MyHR<span className="text-blue-600">WA</span>
//             </span>
//           </div> */}

//           {/* Desktop Menu
//           <div className="hidden md:flex items-center gap-8">
//             <a href="#templates" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Templates</a>
//             <a href="#features" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Features</a>
//             <a href="#faq" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
//             <a href="#" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
//           </div> */}

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">
//             <a href="#services"className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Services
//             </a>

//             <a href="#faq"className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">FAQ
//             </a>
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex items-center gap-4">
//             <button 
//               onClick={handleSignIn}
//               className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
//             >
//               Sign In
//             </button>
//             <button 
//               onClick={onCreateResume}
//               className="px-6 py-3 text-xs font-extrabold bg-slate-900 text-white rounded-xl hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
//             >
//               Create My Resume
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button 
//               onClick={() => setIsOpen(!isOpen)} 
//               className="p-2 text-slate-600 hover:text-slate-900"
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
//           {/* <a href="#templates" className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50">Templates</a>
//           <a href="#features" className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50">Features</a>
//           <a href="#faq" className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50">FAQ</a> */}
//           <a  href="#services"className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50">
//            Services
//           </a>
//           <a href="#faq"className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50">FAQ</a>
          
//           <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
//             <button onClick={handleSignIn} className="w-full py-2.5 text-center font-bold text-slate-700 hover:bg-slate-50 rounded-lg">Sign In</button>
//             <button onClick={onCreateResume} className="w-full py-2.5 text-center font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Create My Resume</button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



//new login feture with logout...





import React, { useState } from "react";
import { createPortal } from "react-dom";
import logoHR08 from "../assets/company-logos/LOGO HR-08.png";
import API from "../api/api";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Navbar({ onCreateResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("name");

  // Toast
  const showToast = (msg) => {
    const div = document.createElement("div");

    div.innerText = msg;
    div.style.position = "fixed";
    div.style.top = "20px";
    div.style.right = "20px";
    div.style.background = "#111";
    div.style.color = "#fff";
    div.style.padding = "12px 16px";
    div.style.borderRadius = "10px";
    div.style.zIndex = "999999";
    div.style.fontSize = "14px";

    document.body.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 2000);
  };

  // Google Login
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const res = await API.post("/accounts/google-login/", {
        email: result.user.email,
        name: result.user.displayName,
      });

      localStorage.setItem("token", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("name", result.user.displayName);

      showToast(`Welcome ${result.user.displayName} 👋`);

      window.location.reload();
    } catch (error) {
      console.error(error);
      showToast("Google Login Failed ❌");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    localStorage.removeItem("name");

    showToast("Logged out successfully 👋");

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-100 font-['Plus_Jakarta_Sans']">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">

            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={onCreateResume}
            >
              <img
                src={logoHR08}
                alt="MyHRWA Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-sm font-bold text-slate-600 hover:text-blue-600"
              >
                Services
              </a>

              <a
                href="#faq"
                className="text-sm font-bold text-slate-600 hover:text-blue-600"
              >
                FAQ
              </a>
            </div>

            {/* Auth */}
            <div className="hidden md:flex items-center gap-4">
              {token ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-slate-700">
                    {userName || "User"}
                  </span>

                  <button
                    onClick={() => setShowLogoutModal(true)}
                    className="text-sm font-bold text-red-600 hover:text-red-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="text-sm font-bold text-slate-700 hover:text-blue-600"
                >
                  Sign In
                </button>
              )}

              <button
                onClick={onCreateResume}
                className="px-6 py-3 text-xs font-extrabold bg-slate-900 text-white rounded-xl hover:bg-slate-800"
              >
                Create My Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 py-4 space-y-3 border-t">

            <a href="#services" className="block font-semibold">
              Services
            </a>

            <a href="#faq" className="block font-semibold">
              FAQ
            </a>

            <div className="border-t pt-4 flex flex-col gap-3">
              {token ? (
                <>
                  <div className="font-bold">
                    {userName || "User"}
                  </div>

                  <button
                    onClick={() => setShowLogoutModal(true)}
                    className="text-red-600 font-bold text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button onClick={handleSignIn}>
                  Sign In
                </button>
              )}

              <button
                onClick={onCreateResume}
                className="bg-blue-600 text-white py-2 rounded-lg"
              >
                Create My Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Logout Modal */}
      {showLogoutModal &&
        createPortal(
          <div className="fixed inset-0 z-[99999] bg-black/50 flex items-center justify-center">

            <div className="bg-white w-[350px] rounded-2xl p-6 shadow-2xl">

              <h2 className="text-xl font-bold text-center">
                Logout
              </h2>

              <p className="text-slate-500 text-center mt-2">
                Are you sure you want to logout?
              </p>

              <div className="flex gap-3 mt-6">

                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 py-3 rounded-xl bg-slate-100 font-semibold"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    setShowLogoutModal(false);
                    handleLogout();
                  }}
                  className="flex-1 py-3 rounded-xl bg-red-600 text-white font-semibold"
                >
                  Logout
                </button>

              </div>

            </div>

          </div>,
          document.body
        )}
    </>
  );
}