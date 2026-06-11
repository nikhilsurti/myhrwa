// import React from "react";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="py-24 bg-slate-50 border-t border-slate-100"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100">
//             Contact Us
//           </span>

//           <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
//             Let's Build Your Career Together
//           </h2>

//           <p className="mt-4 text-slate-500 font-medium">
//             Looking for talent or searching for your next opportunity?
//             Our team is ready to help.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">

//           {/* Left Info */}
//           <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">

//             <h3 className="text-2xl font-extrabold text-slate-900">
//               Get In Touch
//             </h3>

//             <p className="mt-4 text-slate-600 leading-relaxed">
//               Speak with our recruitment experts and discover how we can
//               support your hiring or career goals.
//             </p>

//             <div className="mt-10 space-y-6">

//               <div>
//                 <p className="text-sm font-bold text-slate-400 uppercase">
//                   Email
//                 </p>
//                 <p className="mt-1 text-lg font-semibold text-slate-800">
//                   contact@myhrwa.com
//                 </p>
//               </div>

//               <div>
//                 <p className="text-sm font-bold text-slate-400 uppercase">
//                   Phone
//                 </p>
//                 <p className="mt-1 text-lg font-semibold text-slate-800">
//                   +91 99200 57773
//                 </p>
//               </div>

//               <div>
//                 <p className="text-sm font-bold text-slate-400 uppercase">
//                   Location
//                 </p>
//                 <p className="mt-1 text-lg font-semibold text-slate-800">
//                   Thane, Maharashtra, India
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* Right Form */}
//           <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">

//             <form className="space-y-5">

//               <div>
//                 <label className="block text-sm font-bold text-slate-700 mb-2">
//                   Full Name
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-bold text-slate-700 mb-2">
//                   Email Address
//                 </label>

//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-bold text-slate-700 mb-2">
//                   Phone Number
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="Enter your phone number"
//                   className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-bold text-slate-700 mb-2">
//                   Message
//                 </label>

//                 <textarea
//                   rows="5"
//                   placeholder="How can we help you?"
//                   className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
//               >
//                 Send Message
//               </button>

//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




//with backend connected 
import React, { useState } from "react";
import { sendContactMessage } from "../api/contactService";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await sendContactMessage(formData);

      alert(response.data.message || "Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact Form Error:", error);

      alert(
        error.response?.data?.message ||
          "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100">
            Contact Us
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
            Let's Build Your Career Together
          </h2>

          <p className="mt-4 text-slate-500 font-medium">
            Looking for talent or searching for your next opportunity?
            Our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Get In Touch
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Speak with our recruitment experts and discover how we can
              support your hiring or career goals.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">
                  Email
                </p>

                <p className="mt-1 text-lg font-semibold text-slate-800">
                  contact@myhrwa.com
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">
                  Phone
                </p>

                <p className="mt-1 text-lg font-semibold text-slate-800">
                  +91 99200 57773
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">
                  Location
                </p>

                <p className="mt-1 text-lg font-semibold text-slate-800">
                  Thane, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}