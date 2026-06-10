// import React from "react";

// export default function CertificationsForm({
//   resumeData,
//   certInput,
//   setCertInput,
//   addCertification,
//   removeCertification,
// }) {
//   return (
//     <div className="space-y-6">
//       <h3 className="text-sm font-bold text-slate-900 border-l-4 border-indigo-600 pl-2">
//         Certifications
//       </h3>

//       {/* Input Form */}
//       <form onSubmit={addCertification} className="space-y-3">
//         <input
//           type="text"
//           value={certInput.name}
//           onChange={(e) =>
//             setCertInput({ ...certInput, name: e.target.value })
//           }
//           placeholder="Certificate Name"
//           className="w-full px-3 py-2 border rounded-lg text-xs"
//         />

//         <input
//           type="text"
//           value={certInput.issuer}
//           onChange={(e) =>
//             setCertInput({ ...certInput, issuer: e.target.value })
//           }
//           placeholder="Issuing Organization (Google, Coursera, LinkedIn)"
//           className="w-full px-3 py-2 border rounded-lg text-xs"
//         />

//         <input
//           type="date"
//           value={certInput.date}
//           onChange={(e) =>
//             setCertInput({ ...certInput, date: e.target.value })
//           }
//           className="w-full px-3 py-2 border rounded-lg text-xs"
//         />

//         <input
//           type="text"
//           value={certInput.url}
//           onChange={(e) =>
//             setCertInput({ ...certInput, url: e.target.value })
//           }
//           placeholder="Certificate URL (Important)"
//           className="w-full px-3 py-2 border rounded-lg text-xs"
//         />

//         <button
//           type="submit"
//           className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg"
//         >
//           + Add Certificate
//         </button>
//       </form>

//       {/* List */}
//       <div className="space-y-3">
//         {resumeData.certifications.map((item, idx) => (
//           <div
//             key={idx}
//             className="p-3 border rounded-lg bg-slate-50 space-y-1"
//           >
//             <div className="flex justify-between items-center">
//               <p className="text-xs font-bold text-slate-900">
//                 {item.name}
//               </p>

//               <button
//                 onClick={() => removeCertification(idx)}
//                 className="text-red-500 text-[10px]"
//               >
//                 ✕
//               </button>
//             </div>

//             <p className="text-[10px] text-slate-500">
//               {item.issuer} • {item.date}
//             </p>

//             {item.url && (
//               <a
//                 href={item.url}
//                 target="_blank"
//                 className="text-[10px] text-blue-600 underline"
//               >
//                 View Certificate
//               </a>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import React from "react";

export default function CertificationsForm({
  resumeData,
  addCertification,
  removeCertification,
  handleCertChange,
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-bold border-l-4 border-indigo-600 pl-2">
        Certifications
      </h3>

      {/* Add button */}
      <form onSubmit={addCertification}>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg"
        >
          + Add Certificate
        </button>
      </form>

      {/* List */}
      <div className="space-y-3">
        {resumeData.certifications.map((item) => (
          <div key={item.id} className="p-3 border rounded-lg bg-slate-50 space-y-2">

            <input
              value={item.name}
              onChange={(e) =>
                handleCertChange(item.id, "name", e.target.value)
              }
              placeholder="Certificate Name"
              className="w-full px-2 py-1 border rounded text-xs"
            />

            <input
              value={item.issuer}
              onChange={(e) =>
                handleCertChange(item.id, "issuer", e.target.value)
              }
              placeholder="Issuer"
              className="w-full px-2 py-1 border rounded text-xs"
            />

            <input
              type="date"
              value={item.date}
              onChange={(e) =>
                handleCertChange(item.id, "date", e.target.value)
              }
              className="w-full px-2 py-1 border rounded text-xs"
            />

            <input
  type="url"
  value={item.link}
  onChange={(e) =>
    handleCertChange(item.id, "link", e.target.value)
  }
  placeholder="https://example.com"
  className="w-full px-2 py-1 border rounded text-xs"
/>
            {/* <input
              value={item.link}
              onChange={(e) =>
                handleCertChange(item.id, "link", e.target.value)
              }
              placeholder="Link"
              className="w-full px-2 py-1 border rounded text-xs"
            /> */}

            <button
              onClick={() => removeCertification(item.id)}
              className="text-red-500 text-[10px]"
            >
              Delete
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}