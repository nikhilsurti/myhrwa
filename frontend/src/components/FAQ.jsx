// import React, { useState } from 'react';

// const faqs = [
//   {
//     q: "Is this resume builder completely free?",
//     a: "We offer both free customizable options and premium resume templates with advanced features. You can create a high-quality resume easily without initial barriers."
//   },
//   {
//     q: "Are these templates compatible with ATS tools?",
//     a: "Yes! All designs are systematically tested on popular Application Tracking Systems (ATS) to ensure your key text data gets correctly classified by recruiters."
//   },
//   {
//     q: "Can I download my resume as a PDF file?",
//     a: "Absolutely. Once editing is complete, you can download a pixel-perfect, highly scalable PDF structure immediately."
//   }
// ];

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (idx) => {
//     setOpenIndex(openIndex === idx ? null : idx);
//   };

//   return (
//     <section id="faq" className="py-20 lg:py-28 bg-white border-t border-slate-100">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center mb-16 space-y-4">
//           <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
//           <p className="text-slate-500 font-medium">Have queries? We've got you covered.</p>
//         </div>

//         <div className="space-y-4">
//           {faqs.map((item, idx) => (
//             <div key={idx} className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all">
//               <button 
//                 onClick={() => toggle(idx)}
//                 className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
//               >
//                 <span>{item.q}</span>
//                 <span className="text-blue-600 text-xl font-normal">
//                   {openIndex === idx ? '−' : '+'}
//                 </span>
//               </button>
              
//               {openIndex === idx && (
//                 <div className="p-6 pt-0 text-slate-500 font-medium leading-relaxed text-sm bg-slate-50/50">
//                   {item.a}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }



import React, { useState } from 'react';

const faqs = [
  {
    q: "Is this resume builder completely free?",
    a: "We offer both free customizable options and premium resume templates with advanced features. You can create a high-quality resume easily without initial barriers."
  },
  {
    q: "Are these templates compatible with ATS tools?",
    a: "Yes! All designs are systematically tested on popular Application Tracking Systems (ATS) to ensure your key text data gets correctly classified by recruiters."
  },
  {
    q: "Can I download my resume as a PDF file?",
    a: "Absolutely. Once editing is complete, you can download a pixel-perfect, highly scalable PDF structure immediately."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white font-['Plus_Jakarta_Sans'] border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-sm font-semibold">Have queries? We've got you covered.</p>
        </div>

        {/* Clean Accordion list */}
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm font-extrabold">{item.q}</span>
                <span className="text-blue-600 text-xl font-bold">
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === idx && (
                <div className="p-6 pt-0 text-slate-500 font-semibold leading-relaxed text-xs bg-slate-50/50">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}